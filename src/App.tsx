import { Render } from './routes';
import { GlobalStyle } from './styles/global'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { CompaniesProvider } from './hook/useCompanies';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './util/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <CompaniesProvider>
        <GlobalStyle/>
        <Render toggleTheme={toggleTheme}/>
      </CompaniesProvider>
    </ThemeProvider>
  );
}

export default App;
