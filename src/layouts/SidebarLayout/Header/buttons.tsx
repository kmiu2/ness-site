import { Box, IconButton, Tooltip } from '@mui/material'
import { Instagram } from '@mui/icons-material'

function HeaderButtons() {
  return (
    <Box sx={{ mr: 1 }}>
      <Tooltip arrow title="Discord">
        <IconButton
          color="primary"
          onClick={() => {
            window.open('https://discord.gg/XcwxXkdexV', '_blank')
          }}
        >
          <img
            src="/assets/icons/discord.svg"
            alt="Discord"
            height="20px"
            width="20px"
          />
        </IconButton>
      </Tooltip>
      <Tooltip arrow title="Instagram">
        <IconButton
          color="primary"
          onClick={() => {
            window.open('https://www.instagram.com/uw_ness/', '_blank')
          }}
        >
          <Instagram />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default HeaderButtons
