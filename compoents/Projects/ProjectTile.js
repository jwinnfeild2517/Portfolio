import Image from "next/image"
import { useEffect } from "react"
import styled from "styled-components"


const Tile = styled.li`
  position: relative;
  background-image: url(${props => props.backgronund});
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
  margin-top: 2em;
  min-width: 100%;

  a, p {
    font-size: 1em;
    background-color: #000000b5;
    margin: 0;
  }

  .project__name {
    position: absolute;
    color: white;
    left: 0;
    top: 0;
    padding: 10px;
    text-decoration: underline;
    text-decoration-thickness: 3px;
    font-weight: 300;
  }

  .project__description {
    position: absolute;
    color: white;
    padding: 10px;
    width: 50%;
    right: 0;
    top: 40%;
    line-height: 1.5em;
  }

  @media (min-width: 450px) {
    min-width: 400px;
  }
`

const ProjectTile = ({name, link, description, image}) => {

  return (
    <Tile backgronund={image}>
      <a href={link} className="project__name">{name}</a>
      <p className="project__description">{description}</p>
    </Tile>
  )
}


export default ProjectTile