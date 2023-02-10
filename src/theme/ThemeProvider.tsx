import { ThemeProvider } from '@mui/material'
import { StylesProvider } from '@mui/styles'
import React, { useState } from 'react'
import { themeCreator } from './interface'

export const ThemeContext = React.createContext((themeName: string): void => {
  throw new Error('No theme provider')
})

export const ThemeProviderWrapper: React.FC = (props) => {
  const curThemeName = localStorage.getItem('appTheme') || 'NESSTheme'
  const [themeName, _setThemeName] = useState(curThemeName)
  const theme = themeCreator(themeName)
  const setThemeName = (name: string): void => {
    localStorage.setItem('appTheme', name)
    _setThemeName(name)
  }

  return (
    <StylesProvider injectFirst={true}>
      <ThemeContext.Provider value={setThemeName}>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </ThemeContext.Provider>
    </StylesProvider>
  )
}
