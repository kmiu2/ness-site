import { useContext } from 'react'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone'
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone'
import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import { SidebarContext } from '../../../contexts/SidebarContext'
import HeaderButtons from './buttons'
import { HeaderWrapper } from './styles'

function Header() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext)

  return (
    <HeaderWrapper display="flex" alignItems="center">
      <Box display="flex" alignItems="center" paddingLeft="1%">
        <Typography variant="h3" component="h3">
          NESS
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <HeaderButtons />
        <Box
          component="span"
          sx={{
            ml: 2,
            display: { lg: 'none', xs: 'inline-block' },
          }}
        >
          <Tooltip arrow title="Toggle Menu">
            <IconButton color="primary" onClick={toggleSidebar}>
              {!sidebarToggle ? (
                <MenuTwoToneIcon fontSize="small" />
              ) : (
                <CloseTwoToneIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </HeaderWrapper>
  )
}

export default Header
