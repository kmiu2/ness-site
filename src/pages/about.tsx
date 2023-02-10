import { Box, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import Footer from '../components/Footer'

function About() {
  return (
    <>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <Box margin={{ xs: 2, md: 3 }}>
        <Typography variant="h3" component="h3" gutterBottom>
          About Us
        </Typography>
        <Typography variant="subtitle2">
          The Nanotechnology Engineering Student Society (NESS) is a student-run
          organization that aims to serve and represent the Nanotechnology
          Engineering (NE) student body. It organizes and runs events catered to
          NE students to foster interactions between cohorts. NESS also aims to
          effectively address NE program-wide concerns. NESS was formed in the
          Fall of 2016 and ran its first elections in the Spring of 2017. It has
          partnered with the Waterloo Institute of Nanotechnology and the
          Nanotechnology Engineering Program administration to ensure that the
          society continues to host events and advocate for the student body.
        </Typography>
        <Box height={20} />
        <Typography variant="subtitle2">
          Come join us at our events and get to know your fellow NE students!
          Join our discord server to stay up to date with everything! The link
          can be found in the header of this website.
        </Typography>
      </Box>
      <Footer />
    </>
  )
}

export default About
