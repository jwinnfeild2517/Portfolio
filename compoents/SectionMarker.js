import styled from "styled-components"


const Marker = styled.div`
  background: ${props => props.background || "#FFBB6E"};
  width: 42px;
  height: 8px;
  margin: auto;
`


const SectionMarker = ({color}) => (<Marker background={color}></Marker>)

export default SectionMarker;