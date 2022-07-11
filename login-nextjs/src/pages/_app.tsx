import type { AppProps } from 'next/app'
import { GlobalStyle } from 'styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
