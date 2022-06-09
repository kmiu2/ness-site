import { Grid } from '@mui/material'
import React from 'react'
import './App.css'
import logo from './assets/ness-logo.png'
import { Footer } from './components/main/footer'
import { Header } from './components/main/header'

function App() {
  return (
    <Grid className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>NESS site coming soon...</p>
        <a
          className="App-link"
          href="https://discord.gg/rZzAmybEUP"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join the NESS Discord
        </a>
        <p>Useful Links</p>
        <a
          className="App-link"
          href="/courses.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here for a course map
        </a>
        <a
          className="App-link"
          href="https://ver7ici.github.io/UWCourseMap/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here for a prerequisites checker
        </a>
        <p>Contact Us:</p>
        <a
          className="App-link"
          href="mailto:ness@uwaterloo.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          ness@uwaterloo.ca
        </a>
      </header>
      <Footer />
    </Grid>
  )
}

export default App
