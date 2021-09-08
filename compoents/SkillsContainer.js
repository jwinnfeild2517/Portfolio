import styled from 'styled-components'
import SectionMarker from './SectionMarker'

const Skills = styled.section`

  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 1.6em;
    font-weight: 600;
    margin: 0;
  }

  ul {
    padding: 0;
    list-style-type: none;
    text-align: left;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  span {
    font-size: 3em;
  }


  @media (min-width: 450px) {
    ul {
      padding: 0 3em;
      justify-content: space-between;
    }

    li {
      min-width: 400px;
      max-width: 400px;
    }

  }

`

const SkillsContainer = () => {
  return (
    <Skills>
      <SectionMarker />
      <h2>What I do.</h2>
      <ul>
        <li>
          <span className="material-icons">code</span>
          <h3>Develop.</h3>
          <p>Design, build and maintain efficient, reusable, and reliable React and Node code</p>
        </li>
        <li>
          <span className="material-icons">api</span>
          <h3>Quering Data.</h3>
          <p>Interact with API's to retireve, verify, and display approriate data. </p>
        </li>
        <li>
          <span className="material-icons">api</span>
          <h3>Quering Data.</h3>
          <p>Interact with API's to retireve, verify, and display approriate data. </p>
        </li>
      </ul>
    </Skills>
  )
}

export default SkillsContainer