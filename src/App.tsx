import { Footer } from './components/layout/Footer'
import { SiteHeader } from './components/layout/SiteHeader'
import { CredentialsSection } from './components/sections/CredentialsSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { ExpertiseSection } from './components/sections/ExpertiseSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { ResearchSection } from './components/sections/ResearchSection'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <ResearchSection />
        <ExperienceSection />
        <ProjectsSection />
        <ExpertiseSection />
        <CredentialsSection />
      </main>
      <Footer />
    </>
  )
}
