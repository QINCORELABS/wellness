import React from 'react'
import Header from '../components/Header'
import Intro from '../components/Intro'
import About from '../components/About'
import Services from '../components/Services'
import Clients from '../components/Clients'
import Docs from '../components/Docs'
import Query from '../components/Query'
import Footer from '../components/Footer'


function Home() {
  return (
    <>
    <Header/>
    <Intro/>
    <About/>
    <Services/>
    <Clients/>
    <Docs/>
  
    <Query/>
  <Footer/>
    </>
  )
}

export default Home