import { Box, Link, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { Footer } from '../components/Footer'

const Resources = () => {
  return (
    <>
      <Helmet>
        <title>Resources</title>
      </Helmet>
      <Box margin={{ xs: 2, md: 3 }}>
        <Typography variant="h3" component="h3" gutterBottom>
          Resources Page
        </Typography>
        <Box height={15} />
        <Typography variant="h5" component="h5" textAlign="center" gutterBottom>
          Exchange Guide Document
        </Typography>
        <Box height={5} />
        <Typography>
          Going on exchange is a great way to travel and experience a different
          university and local culture. It's a unique experience that's
          difficult to recreate after graduation, because you'll be surrounded
          by other students your age that are also looking to travel and meet
          new people. Most exchange students that you talk to will say it was
          the best decision they made during their undergrad, and their
          favourite term. It can be a bit daunting to arrange an exchange term
          in a highly specialized course like nano. Hopefully this guide can
          provide some additional information to help you decide if you want to
          go on exchange and where you want to apply to!
        </Typography>
        <Box height={5} />
        <Link
          href="https://docs.google.com/document/d/1NbvXlQE68gm-AB5JMY3VQevchV8IIuCL/edit?usp=share_link&ouid=109809803479917406932&rtpof=true&sd=true"
          target="_blank"
          style={{
            display: 'inline-block',
            textDecoration: 'underline',
          }}
        >
          <Typography>Click here to view the document</Typography>
        </Link>
        <Box height={25} />
        <Typography variant="h5" component="h5" textAlign="center" gutterBottom>
          Build Your Own Online Portfolio
        </Typography>
        <Box height={5} />
        <Typography>
          Looking to build your own online portfolio? Watch this video to learn
          how to create your own website! No coding experience required.
        </Typography>
        <Box height={5} />
        <Link
          href="https://docs.google.com/document/d/1ZdWEgsP5okhxbQYrZBOrhEUrA1F6AIWAajXFyPYyzkM/edit?usp=share_link"
          target="_blank"
          style={{
            display: 'inline-block',
            textDecoration: 'underline',
          }}
        >
          <Typography>Click here to view the accompanying document</Typography>
        </Link>
        <Box height={7} />
        <Box
          width={{
            xs: '100%',
            md: '50%',
          }}
          height={{
            xs: 200,
            md: 500,
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/u7xOc-Aa4-w"
            title="YouTube video player"
            width="100%"
            height="100%"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              border: 0,
            }}
          />
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Resources
