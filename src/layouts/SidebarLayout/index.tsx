import { Box, useTheme } from '@mui/material'
import { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

interface SidebarLayoutProps {
  children?: ReactNode
}

const SidebarLayout: FC<SidebarLayoutProps> = () => {
  const theme = useTheme()

  return (
    <>
      <Box
        sx={{
          flex: 1,
          height: '100%',
        }}
      >
        <Header />
        <Sidebar />
        <Box
          sx={{
            position: 'relative',
            zIndex: 5,
            display: 'block',
            flex: 1,
            pt: `${theme.header.height}`,
            [theme.breakpoints.up('lg')]: {
              ml: `${theme.sidebar.width}`,
            },
          }}
        >
          <Box display="block">
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default SidebarLayout
