import React from 'react'
import { Typography } from '@mui/material'
import { CustomTypographyProps } from '@utils/interfaces'

const MuiTypography = ({ variant, sx, text, ...rest }: CustomTypographyProps) => (
  <Typography data-testid="typography-component" variant={variant} sx={sx} {...rest}>
    {text}
  </Typography>
)

export default MuiTypography
