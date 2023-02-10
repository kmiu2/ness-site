import { Box, Typography } from '@mui/material'

function Footer() {
  return (
    <Box
      marginLeft={{
        xs: 2.5,
        lg: 5,
      }}
    >
      <Typography variant="subtitle1">&copy; 2023 - NESS</Typography>
    </Box>
  )
}

export default Footer
