import { styled } from '@mui/material'
import { Link } from 'react-router-dom'

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

export const Logo = () => {
  return (
    <LogoWrapper to="/">
      <img
        src="/assets/logos/ness-logo.png"
        alt="logo"
        height="100%"
        width="100%"
      />
    </LogoWrapper>
  )
}
