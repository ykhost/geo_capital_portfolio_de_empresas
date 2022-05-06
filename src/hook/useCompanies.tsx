import { createContext, ReactNode, useContext } from "react"
import useSWR from "swr";
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
  companiesFormatted?: CompanyProps[];
  isValidating?: boolean;
}

const CompaniesContext = createContext<CompaniesContextData>({} as CompaniesContextData )

export function CompaniesProvider({ children }: CompaniesProviderProps) {

  const options = {
    method: 'GET',
    url: 'https://yh-finance.p.rapidapi.com/market/v2/get-quotes',
    params: {region: 'US', symbols: 'AMD,IBM,AAPL,BUD,DIS,MSFT,NKE,TDOC,ITUB'},
    headers: {
      'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
      'X-RapidAPI-Key': '035bb73da1msh1f3e8f34cdccf3cp1155c8jsn3e80fa570c95',
    }
  };

  const { data } = useSWR<Company[]>(options.url, async () => {
    const response = await api.request(options).then((response) => {
      return response.data.quoteResponse.result
    } )
    console.log(response)
    return response
  },{ refreshInterval: 1000 })


  const companiesFormatted = data?.map(company => ({
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
