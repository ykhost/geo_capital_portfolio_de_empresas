import { createContext, ReactNode, useContext, useState } from "react"
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
  handlerAddCompanyAtList:(data: String) => void;
}

const CompaniesContext = createContext<CompaniesContextData>({} as CompaniesContextData )

export function CompaniesProvider({ children }: CompaniesProviderProps) {
  const [listCompaniesToSearch, setListCompaniesToSearch] = useState<String[]>(
    ['AMD','IBM','AAPL','BUD']
  )

  const handlerAddCompanyAtList = (ticker: String) => {
    const updateList = listCompaniesToSearch
    updateList.push(ticker)
    setListCompaniesToSearch(updateList)
    console.log('Test', updateList, listCompaniesToSearch)
  }

  const URL = process.env.REACT_APP_YH_FINANCE_URL_QUOTES || ''
  const API_KEY = process.env.REACT_APP_YH_FINANCE_API_KEY || ''
  const API_HOST = process.env.REACT_APP_YH_FINANCE_API_HOST || ''

  console.log('test', URL, API_KEY, API_HOST)

  const options = {
    method: 'GET',
    url: URL,
    params: {region: 'US', symbols: listCompaniesToSearch.toString()},
    headers: {
      'X-RapidAPI-Host': API_HOST,
      'X-RapidAPI-Key': API_KEY,
    }
  };

  console.log('test1', options)

  const { data } = useSWR<Company[]>(options.url, async () => {
    const response = await api.request(options).then((response) => {
      return response.data.quoteResponse.result
    } )
    console.log(response)
    return response
  })
    // },{ refreshInterval: 1000 })


  const companiesFormatted = data?.map(company => ({
    ...company,
    priceFormatted: formatPrice(company.regularMarketPrice),
    percentFormatted: company.regularMarketChangePercent.toFixed(2),
    stateVariation: company.regularMarketChangePercent >= 0 ? 'up' : 'down'
  }))

  return (
    <CompaniesContext.Provider value={{ companiesFormatted, handlerAddCompanyAtList }} >
      { children }
    </CompaniesContext.Provider>
  );
}

export function useCompanies() {
  const context = useContext(CompaniesContext);
  return context
}
