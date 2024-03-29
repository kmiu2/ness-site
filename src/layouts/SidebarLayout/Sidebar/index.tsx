import { useContext } from 'react'
import { Scrollbar } from '../../../components/Scrollbar'
import { SidebarContext } from '../../../contexts/SidebarContext'
import {
  alpha,
  Box,
  darken,
  Divider,
  Drawer,
  lighten,
  useTheme,
} from '@mui/material'
import { Logo } from '../../../components/Logo'
import { Options } from './options'
import { SidebarWrapper } from './styles'

export const Sidebar = () => {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext)
  const closeSidebar = () => toggleSidebar()
  const theme = useTheme()

  const wrapperBackground =
    theme.palette.mode === 'dark'
      ? alpha(lighten(theme.header.background as string, 0.1), 0.5)
      : darken(theme.colors.alpha.black[100], 0.5)

  const renderLogo = () => {
    return (
      <Box mt={3} display="flex" justifyContent="center" alignItems="center">
        <Box
          mx={2}
          sx={{
            width: 52,
          }}
        >
          <Logo />
        </Box>
      </Box>
    )
  }

  return (
    <>
      <SidebarWrapper
        sx={{
          display: {
            xs: 'none',
            lg: 'inline-block',
          },
          position: 'fixed',
          left: 0,
          top: 0,
          background: wrapperBackground,
          boxShadow:
            theme.palette.mode === 'dark' ? theme.sidebar.boxShadow : 'none',
        }}
      >
        <Scrollbar>
          {renderLogo()}
          <Divider
            sx={{
              mt: theme.spacing(3),
              mx: theme.spacing(2),
              background: theme.colors.alpha.trueWhite[10],
            }}
          />
          <Options />
        </Scrollbar>
        <Divider
          sx={{
            background: theme.colors.alpha.trueWhite[10],
          }}
        />
      </SidebarWrapper>
      <Drawer
        sx={{
          boxShadow: `${theme.sidebar.boxShadow}`,
        }}
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={sidebarToggle}
        onClose={closeSidebar}
        variant="temporary"
        elevation={9}
      >
        <SidebarWrapper sx={{ background: theme.sidebar.background }}>
          <Scrollbar>
            {renderLogo()}
            <Divider
              sx={{
                mt: theme.spacing(3),
                mx: theme.spacing(2),
                background: theme.colors.alpha.trueWhite[10],
              }}
            />
            <Options />
          </Scrollbar>
        </SidebarWrapper>
      </Drawer>
    </>
  )
}
