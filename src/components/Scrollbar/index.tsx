import PropTypes from 'prop-types'
import { FC, ReactNode } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'

import { Box, useTheme } from '@mui/material'

interface ScrollbarProps {
  className?: string
  children?: ReactNode
}

export const Scrollbar: FC<ScrollbarProps> = ({
  className,
  children,
  ...rest
}) => {
  const theme = useTheme()

  const handleRenderThumb = () => {
    return (
      <Box
        sx={{
          width: 5,
          background: `${theme.colors.alpha.black[10]}`,
          borderRadius: `${theme.general.borderRadiusLg}`,
          transition: `${theme.transitions.create(['background'])}`,

          '&:hover': {
            background: `${theme.colors.alpha.black[30]}`,
          },
        }}
      />
    )
  }

  return (
    <Scrollbars autoHide renderThumbVertical={handleRenderThumb} {...rest}>
      {children}
    </Scrollbars>
  )
}

Scrollbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
