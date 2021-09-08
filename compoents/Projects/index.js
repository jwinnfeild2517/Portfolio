import styled from "styled-components"
import SectionMarker from "../SectionMarker"
import ProjectTile from "./ProjectTile"
import projects from '../../config/projects.json'



const ProjectsIndex = styled.div`
    background-color: #3A4443;
    padding: 1.5em;
    color: white;

    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      list-style-type: none;
      padding: 0;
    }

    @media (min-width: 450px) {
      ul {
        padding: 0 3em;
        justify-content: space-around;
      }
    }
`

const Projects = () => {
  return (
    <ProjectsIndex>
      <SectionMarker />
      <h2>Work Examples</h2>
      <p></p>
      <ul>
        {projects.map((project) => {
              return(
                  <ProjectTile
                    key={project.id}
                    name={project.name}
                    link={project.link}
                    description={project.description}
                    image={project.image}
                  />
              )
          })}
      </ul>
    </ProjectsIndex>
  )
}


export default Projects;