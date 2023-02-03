import { Box, Button, Card, Container, styled, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'

const MainContent = styled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
)

function Status404() {
  return (
    <>
      <Helmet>
        <title>Status - 404</title>
      </Helmet>
      <MainContent>
        <Container maxWidth="md">
          <Box textAlign="center" maxWidth={500} margin="auto">
            <img src="/assets/svg/404.svg" alt="404" />
            <Typography variant="h2" sx={{ my: 2 }}>
              The page you were looking for doesn't exist.
            </Typography>
            <Typography
              variant="h4"
              color="text.secondary"
              fontWeight="normal"
              sx={{ mb: 4 }}
            >
              It's on us, we moved the content to a different page.
            </Typography>
          </Box>
          <Container maxWidth="sm">
            <Card sx={{ textAlign: 'center', mt: 3, p: 4 }}>
              <Button href="/" variant="outlined">
                Go to homepage
              </Button>
            </Card>
          </Container>
        </Container>
      </MainContent>
    </>
  )
}

export default Status404
