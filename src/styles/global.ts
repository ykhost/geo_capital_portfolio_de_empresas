import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: ${props => props.theme.colors.background};
    --secondary: ${props => props.theme.colors.secondary};
    --oragen-500: #E5803D;
    --oragen-200: #f7bd91;
    --grey-500: #4d4d4d;
    --title-color: ${props => props.theme.colors.titleColor};
    --border-color: ${props => props.theme.colors.borderColor};
    --text-color: ${props => props.theme.colors.textColor};
    --red-500: #F33954;
    --green-500: #48B34D;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  button, a {
    cursor: pointer;
  }

  body{
    background: var(--background);
  }

  body, input, textarea, button{
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      color: var(--text-color);
  }
`
