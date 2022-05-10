import React from 'react'
import logo from './assets/ness-logo.png'
import './App.css'

function App() {
  return (
    <div className="App">
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
    </div>
  )
}

export default App
