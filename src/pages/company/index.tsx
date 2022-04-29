import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useCompanies } from '../../hook/useCompanies';
import { Container } from './styles';

interface CompanyProps {
  longName: string;
  symbol: string;
  regularMarketPrice: number;
  regularMarketChangePercent: number;
  fullExchangeName: string;
  priceFormatted: string;
  stateVariation: string;
  percentFormatted: string;
}


export function Company() {
  const [company, setCompany] = useState<CompanyProps>()

  const navigate = useNavigate();
  const { id } = useParams()
  const { companiesFormatted } = useCompanies()

  useEffect(()=> {
    const company = companiesFormatted.find(company => company.symbol === id)
    if (!company) {
      navigate('/home')
    }
    setCompany(company)
  },[companiesFormatted, id, navigate])

  return (
    <Container>
      <div className="nameSection">
        <div className="h1">
          <h2>{company?.longName}</h2>
          <span>{company?.symbol}</span>
        </div>
        <span>Exchange: {company?.fullExchangeName}</span>
      </div>
      <div className="priceSection">
        <span>{company?.priceFormatted}</span>
        <span className={company?.stateVariation}>
          {company?.stateVariation === "up" ? "+" : undefined}
          {company?.percentFormatted}%
        </span>
      </div>
    </Container>
  );
};
