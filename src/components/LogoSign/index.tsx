import { styled } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../../assets/logos/ness-logo.png'

const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        display: flex;
        text-decoration: none;
        width: 53px;
        margin: 0 auto;
        font-weight: ${theme.typography.fontWeightBold};
`
)

function Logo() {
  return (
    <LogoWrapper to="/overview">
      <img src={logo} alt="logo" height="100%" width="100%" />
    </LogoWrapper>
  )
}

export default Logo
