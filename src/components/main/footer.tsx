import MailIcon from '@mui/icons-material/Mail'
import { Grid, Typography } from '@mui/material'
import instaLogo from '../../assets/instagram.svg'
import logo from '../../assets/ness-logo.png'
import './footer.css'

export function Footer() {
  return (
    <Grid container spacing={2} padding={2} alignItems="center">
      <Grid item xs={3}>
        <img alt="ness-logo" className="footer-logo" src={logo} />
      </Grid>
      <Grid item xs={9}>
        <Typography variant="h6">Socials</Typography>
        <img
          alt="insta-logo"
          className="footer-social"
          src={instaLogo}
          height="30"
        />
        <MailIcon className="footer-social" />
      </Grid>
    </Grid>
  )
}
