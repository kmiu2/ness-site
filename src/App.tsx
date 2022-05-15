import { Grid } from '@mui/material'
import React from 'react'
import './App.css'
import logo from './assets/ness-logo.png'
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
      </header>
    </Grid>
  )
}

export default App
