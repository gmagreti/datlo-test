import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
      --highlight: #e20e8d;
      --background: #030518;
      --white: #eeeeee;
      --gray100: #dce2e6;
      --gray200: #666666;
      --blue: #2f66ff;

      --container: 100rem;

      --small: 1.5rem;
      --medium: 3rem;
      --large: 5rem;
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: var(--background);
    color: var(--white);
  }

  p {
    font-size: 2rem;
    line-height: var(--medium);
  }
`

export default GlobalStyles
