import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react"
import { api } from "../services/api";
import { formatPrice } from "../util/format";

interface Company {
  longName: string;
  symbol: string;
  regularMarketPrice: number;
  regularMarketChangePercent: number;
  fullExchangeName: string;
}

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

interface CompaniesProviderProps {
  children: ReactNode;
}

interface CompaniesContextData{
  companiesFormatted: CompanyProps[];
}

const CompaniesContext = createContext<CompaniesContextData>({} as CompaniesContextData )

export function CompaniesProvider({ children }: CompaniesProviderProps) {
  const [dataCompanies, setDataCompanies] = useState<Company[]>([{
    longName: '',
    symbol: '',
    regularMarketPrice: 0,
    regularMarketChangePercent: 0,
    fullExchangeName: '',
  }])

  const getDataCompanies = useCallback(async () => {
    const options = {
      method: 'GET',
      url: 'https://yh-finance.p.rapidapi.com/market/v2/get-quotes',
      params: {region: 'US', symbols: 'AMD,IBM,AAPL,BUD,DIS,MSFT,NKE,TDOC,ITUB'},
      headers: {
        'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
        'X-RapidAPI-Key': 'f1a15db943msh93228d470e81b4bp11114djsn480b8587b851',
      }
    };
    const response = await api.request(options).then((response) => {return response.data.quoteResponse.result} )
    setDataCompanies(response)
  },[])


  useEffect(()=>{
    setTimeout(() => {
      getDataCompanies()
    }, 1000)
  },[])

  const companiesFormatted = dataCompanies.map<CompanyProps>(company => ({
    ...company,
    priceFormatted: formatPrice(company.regularMarketPrice),
    percentFormatted: company.regularMarketChangePercent.toFixed(2),
    stateVariation: company.regularMarketChangePercent >= 0 ? 'up' : 'down'
  }))

  return (
    <CompaniesContext.Provider value={{ companiesFormatted }} >
      { children }
    </CompaniesContext.Provider>
  );
}

export function useCompanies() {
  const context = useContext(CompaniesContext);
  return context
}
