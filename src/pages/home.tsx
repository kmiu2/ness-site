import { Box, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Helmet>
        <title>NESS Home</title>
      </Helmet>
      <Box margin={{ xs: 2, md: 3 }}>
        <Box width="100%">
          <Typography variant="h3" component="h3" gutterBottom>
            Hello!
          </Typography>
          <Typography variant="subtitle2">
            Welcome to the Official NESS Website. Click on the links in the
            sidebar to navigate around.
          </Typography>
        </Box>
        <Box height={20} />
        <Box width={{ xs: '100%', md: '40%' }}>
          <img
            src="/assets/logos/ness-logo-sticker.png"
            alt="NESS Logo"
            width="100%"
          />
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Home
