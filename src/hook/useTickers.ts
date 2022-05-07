import useSWR from "swr"
import { api } from "../services/api"

interface CompanyProps {
  symbol: String;
  name: String;
}

export function useTickers() {

  const options = {
    hostname: 'financialmodelingprep.com',
    port: 443,
    path: 'https://financialmodelingprep.com/api/v3/available-traded/list?apikey=148c5807b8317314e31bc7b11122d631',
    method: 'GET'
  }

  const { data, error, mutate } = useSWR<CompanyProps[]>( options.path, async () => {
    const response = await api.get(options.path)
    return response.data
  })

  return { data, error, mutate}
}
