import { PageSEO } from '../components/SEO'
import ThemeSwitch from '../components/ThemeSwitch'
import siteMetadata from '../data/siteMetadata'


export default function Home() {
  return (
  <>
    <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
      <div className="shadow-lg shadow-black bg-slate-100 rounded-md p-4 dark:bg-transparent hover:shadow">test1</div>
      <div className="col-span-2 rounded-md p-4">test2</div>
      <div className="col-span-2 rounded-md p-4"></div>
    </div>
    <ThemeSwitch />
  </>
  )
}