import { Box, useTheme } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import CourseMap from '../components/CourseMap'

function Courses() {
  const theme = useTheme()
  const headerHeight = theme.header.height
  const sidebarWidth = theme.sidebar.width

  return (
    <>
      <Helmet>
        <title>Courses</title>
      </Helmet>
      <Box
        sx={{
          height: `calc(100vh - ${headerHeight})`,
          width: {
            xs: '100vw',
            lg: `calc(100vw - ${sidebarWidth})`,
          },
        }}
      >
        <CourseMap />
      </Box>
    </>
  )
}

export default Courses
