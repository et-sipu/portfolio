import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import siteMetadata from '../data/siteMetadata'
import LayoutWrapper from '../components/LayoutWrapper'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}

export default MyApp
