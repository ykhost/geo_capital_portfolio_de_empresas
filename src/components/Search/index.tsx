import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useCompanies } from '../../hook/useCompanies';
import { useTickers } from '../../hook/useTickers';

type ItemProps = {
  symbol: String;
  name: String;
}

function App() {
  const { data } = useTickers();

  const { handlerAddCompanyAtList } = useCompanies()

  const handleOnSearch = (string: string, results: any) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    // console.log(string, results)
  }

  const handleOnHover = (result: any) => {
    // the item hovered
    // console.log(result)
  }

  const handleOnSelect = ({ symbol }: ItemProps) => {
    handlerAddCompanyAtList(symbol)
  }

  const handleOnFocus = () => {
    //
  }

  const formatResult = (item: ItemProps) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.symbol}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={data as ItemProps[]}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </div>
      </header>
    </div>
  )
}

export default App
