import React from 'react'
import './App.css'
import logo from './assets/ness-logo.png'

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
      </header>
    </div>
  )
}

export default App
