import PortfolioLayout from '../Layout/PortfolioLayout'
import IntroContainer from '../compoents/IntroContainer'
import SkillsContainer from '../compoents/SkillsContainer'
import Projects from '../compoents/Projects'
import RoadAnimation from '../compoents/RoadAnimation'

export default function Home() {
  return (
    <div>
      <PortfolioLayout>
        <IntroContainer />
        <RoadAnimation />
        <SkillsContainer />
        <Projects />
      </PortfolioLayout>
    </div>
  )
}
