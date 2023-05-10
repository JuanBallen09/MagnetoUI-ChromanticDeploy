import { IconProps as IconPropsIconsSax, Icon } from 'iconsax-react'

export interface IconProps extends IconPropsIconsSax {
  Icon: Icon
  hover: boolean
  className?: string
}
