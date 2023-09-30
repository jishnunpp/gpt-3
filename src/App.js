import React from 'react'
import './App.css'
import { Article,Brand,Navbar,Cta } from './components'
import { Footer,Blog,Possibility,Features,Whatgpt3,Header } from './containers'
const App = () => {
  return (
    <div className='app'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>

      </div>
      <Brand/>
      <Whatgpt3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
