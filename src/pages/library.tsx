import { Box, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'

const Library = () => {
  setTimeout(() => {
    window.location.href = 'https://www.google.ca'
  }, 2000)

  return (
    <>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <Box margin={{ xs: 2, md: 3 }}>
        <Typography fontStyle="italic" variant="h3" component="h3" gutterBottom>
          Redirecting to the NESS Library...
        </Typography>
        <Box width="100%" maxWidth={500}>
          <img src="/assets/svg/cat.svg" alt="cat" width="100%" />
        </Box>
      </Box>
    </>
  )
}

export default Library
