import PortfolioLayout from '../Layout/PortfolioLayout'
import IntroContainer from '../compoents/IntroContainer'
import SkillsContainer from '../compoents/SkillsContainer'
import Projects from '../compoents/Projects'

export default function Home() {
  return (
    <div>
      <PortfolioLayout>
        <IntroContainer />
        <SkillsContainer />
        <Projects />
      </PortfolioLayout>
    </div>
  )
}
