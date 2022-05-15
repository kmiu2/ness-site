import { Grid, Typography } from '@mui/material'
import logo from '../../assets/ness-logo.png'
import './header.css'

export function Header() {
  return (
    <Grid container spacing={2} padding={2} alignItems="center">
      <Grid item xs={3}>
        <img alt="ness-logo" className="header-logo" src={logo} />
      </Grid>
      <Grid item xs={9}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography variant="h6">About</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6">Community</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6">Support</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6">Contact</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
