import styled from "styled-components"
import { useRef } from "react"



const Bar = styled.div`
  width: 100%;
  height: 8px;
  background: #ccc;
  position: fixed;
  z-index: 1;

  .progress-bar {
    height: 8px;
    width: 0%;
    // background: linear-gradient(90deg,
    //             rgba(131, 58, 180, 1) 0%,
    //             rgba(253, 29, 143, 1) 50%,
    //             rgba(253, 133, 69, 1) 100%);
    background: linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% );
    width: 100%;
  }
`

const ProgressBar = ({scrolled}) => {

  return (
    <Bar>
      <div className='progress-bar' style={{width: `${scrolled}%`}}></div>
    </Bar>
  )
}

export default ProgressBar

