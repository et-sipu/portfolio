import SectionContainer from './SectionContainer'
import ThemeSwitch from '../components/ThemeSwitch'
import Download from '../components/Download'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center py-2">
          <ThemeSwitch />|<Download />
        </header>
        <main className="mb-auto">{children}</main>
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
