import Head from 'next/head'
import { useState } from 'react'
import styled from 'styled-components'
import ProgressBar from '../compoents/Progressbar'

const Layout = styled.div`
  background-color: #EEF1EF;
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
  max-height: 100vh;
  max-width: 100%;
  font-family: 'Montserrat', sans-serif;
  color: #3a4443;
  overflow: scroll;

  main {
    background-color: #EEF1EF
  }
  h2 {
    font-size: 1.8em;
    font-weight: 500;
  }

  p {
    line-height: 1.6;
    font-size: 1.2em;
    font-weight: 300;
  }

  @keyframes fade-in {
    from {opacity: 0; transform: scale(.7,.7)}
    to {opacity: 1;}
  }

  .fade-in-element {
    animation: fade-in 1.4s;
  }

`

const PortfolioLayout = ({ children }) => {

  const [scrollProgress, setscrollProgress] = useState(0)

  const handleScroll = (element) => {
    let e = element.target
    let winSroll = e.scrollTop
    let height = e.scrollHeight - e.clientHeight
    setscrollProgress((winSroll / height) * 100)
  }

  return (
    <Layout onScroll={handleScroll}>
      <Head>
        <title>Jenner-IO</title>
        <meta name="description" content="Jenner's Porfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Head>
      <main>
        <ProgressBar scrolled={scrollProgress}/>
        {children}
      </main>
    </Layout>
  )
}

export default PortfolioLayout;
