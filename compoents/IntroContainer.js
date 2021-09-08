import Image from 'next/image'
import styled from 'styled-components'
import SectionMarker from './SectionMarker'

const Intro = styled.section`

  text-align: center;
  width: 100%;

  img {
    border-radius: 100%;
    border-image-source: linear-gradient(to right, #fc5c7d, #6a82fb);
    border: 1px solid;
  }

  .hero {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
    position: relative;

    .scroll-arrow {
      position: absolute;
      border: 2px solid;
      width: 80px;
      height: 80px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 1em;

      @keyframes spin {
        from {transform: rotate(0deg)}
        to {transform: rotate(360deg)}
      }

      #spinner {
        animation: spin 1.4s;
        border: solid #FFBB6E;
        border-radius: 100%;
      }

      span {
        font-size: 2em;
      }
    }
  }

  .about-section {
    background-color: #FFBB6E;
    color: black;
    padding: 32px 20px;
  }


  @media (min-width: 450px) {
    .hero {
      height: 100vh;
    }
  }

`

const IntroContainer = () => {
  return (
    <Intro>
      <div className="hero fade-in-element">
        <div id="spinner">
          <Image
            unoptimized
            alt=""
            src="/profilepic.jpg"
            height={122}
            width={128}
          />
        </div>
        <h2>Jenner.</h2>
        <p>Software Engineer/Front End Developer</p>
        <a href="#about" className="scroll-arrow">
          <span className="material-icons slide-in-elliptic-top-fwd">arrow_downward</span>
        </a>
        </div>
      <div id="about" className='about-section hidden'>
        <SectionMarker color="white"/>
        <h2>Connect.</h2>
        <p>
          Below you'll find links to some of the places you can find me.
        </p>
        <a
          href="https://www.linkedin.com/in/jenner-thomas"
          aria-label="navigate to my linked in page"
          target="_blank" rel="nofollow noreferrer"
        >
          Linked in
        </a><span> | </span>
        <a
          href="https://github.com/jwinnfeild2517"
          aria-label="navigate to my git hub page"
          target="_blank" rel="nofollow noreferrer"
        >
          Github
        </a>
      </div>
    </Intro>
  )
}

export default IntroContainer;