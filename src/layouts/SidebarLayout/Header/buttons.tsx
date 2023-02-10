import { Box, IconButton, Tooltip } from '@mui/material'
import { Instagram } from '@mui/icons-material'

export const HeaderButtons = () => {
  const handleOpenDiscord = () => {
    window.open('https://discord.gg/XcwxXkdexV', '_blank')
  }

  const handleOpenInstagram = () => {
    window.open('https://www.instagram.com/uw_ness/', '_blank')
  }

  return (
    <Box sx={{ mr: 1 }}>
      <Tooltip arrow title="Discord">
        <IconButton color="primary" onClick={handleOpenDiscord}>
          <img
            src="/assets/icons/discord.svg"
            alt="Discord"
            height="20px"
            width="20px"
          />
        </IconButton>
      </Tooltip>
      <Tooltip arrow title="Instagram">
        <IconButton color="primary" onClick={handleOpenInstagram}>
          <Instagram />
        </IconButton>
      </Tooltip>
    </Box>
  )
}
