import { Box, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { Footer } from '../components/Footer'
import { PhotoGallery, PhotoGalleryItem } from '../components/PhotoGallery'

const Team = () => {
  const team2223: PhotoGalleryItem[] = [
    {
      img: '/assets/profiles/2223/nick_pfeifle.jpg',
      title: 'Nick Pfeifle',
      subtitle: 'President',
      description:
        "Hello! I'm Nicholas Pfeifle, a Nano 23. I'm an avid cyclist and am enamoured with water science! Talk to me about dinosaurs and bugs.",
    },
    {
      img: '/assets/profiles/2223/kenny_miu.jpg',
      title: 'Kenny Miu',
      subtitle: 'VP Academic',
      description:
        "Hey I'm Kenny Miu! I'm a Nano 24 and I enjoy software development as well as drawing in my free time!",
    },
    {
      img: '/assets/profiles/2223/lisa_gavronskiy.jpg',
      title: 'Lisa Gavronskiy',
      subtitle: 'VP Finance & Events',
      description:
        "Hey I'm Lisa! I'm a nano 25 and my favourite dessert is apple pie!",
    },
    {
      img: '/assets/profiles/2223/hadi_naeisseh.jpg',
      title: 'Hadi Naeisseh',
      subtitle: 'VP Communications',
      description:
        "Hey I'm Hadi and I'm a Nano 26! I love listening to music and watching movies in my spare time.",
    },
  ]

  return (
    <>
      <Helmet>
        <title>NESS Team</title>
      </Helmet>
      <Box margin={{ xs: 2, md: 3 }}>
        <Typography variant="h3" component="h3" gutterBottom>
          Meet the Team
        </Typography>
        <Box height={20} />
        <Box alignItems="center" display="flex" flexDirection="column">
          <Typography variant="h5" component="h5" gutterBottom>
            2022-2023 Executive Team
          </Typography>
          <Box width={{ xs: '100%', md: '50%' }}>
            <PhotoGallery items={team2223} />
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Team
