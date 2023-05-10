import React from 'react'
import { Link21 } from 'iconsax-react'
import { IconProps } from './Icon.interface'
import { withStyles } from './Icon.styles'

const Component: React.FC<IconProps> = ({
  Icon = Link21,
  size = 20,
  color = '#2c2c2c',
  variant = 'Linear',
  className
}) => {
  return <Icon className={className} variant={variant} size={size} color={color} />
}

export const IconItem = withStyles(Component)
