import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import siteMetadata from '../data/siteMetadata'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
