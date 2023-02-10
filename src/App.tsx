import { ThemeProviderWrapper } from './theme/ThemeProvider'
import { routes } from './router'
import { CssBaseline } from '@mui/material'
import { useRoutes } from 'react-router-dom'

export const App = () => {
  const content = useRoutes(routes)
  return (
    <ThemeProviderWrapper>
      <CssBaseline />
      {content}
    </ThemeProviderWrapper>
  )
}
