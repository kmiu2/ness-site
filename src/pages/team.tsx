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

  const team2324: PhotoGalleryItem[] = [
    {
      img: '/assets/profiles/2324/kenny_miu.jpg',
      title: 'Kenny Miu',
      subtitle: 'President',
      description:
        "Hey I'm Kenny Miu! I was the VP Academic last year and I'm excited to be your president this year! I still do enjoy software development as well as drawing in my free time!",
    },
    {
      img: '/assets/profiles/2324/oscar_mccormack.jpg',
      title: 'Oscar McCormack',
      subtitle: 'VP Academic',
      description:
        "Hello! I'm Oscar McCormack, your VP Academic! I'm your main line of support for if you need assistance with matters concerning coursework, professors, or any academic matters! Hope to see you around!",
    },
    {
      img: '/assets/profiles/2324/sameek_sharma.jpg',
      title: 'Sameek Sharma',
      subtitle: 'VP Outreach',
      description:
        "Hi! I'm Sameek, you VP Outreach. I'm going to try my best to get you opportunities to explore your interests! I really enjoy powerlifting and computer engineering!",
    },
    {
      img: '/assets/profiles/2324/asher_scaini.jpg',
      title: 'Asher Scaini',
      subtitle: 'VP Communications',
      description:
        "Hello! My name is Asher, and I'm your VP Communications! My role is largely centred around facilitating & supporting communication amongst the NESS team, other cohorts, and the faculty at large.",
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
            2023-2024 Executive Team
          </Typography>
          <Box width={{ xs: '100%', md: '50%' }}>
            <PhotoGallery items={team2324} />
          </Box>
        </Box>
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
