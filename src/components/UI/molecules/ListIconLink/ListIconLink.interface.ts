import { Icon } from 'iconsax-react'

type Direction = 'row' | 'column'
type Variant = 'Linear' | 'Outline' | 'Broken' | 'Bold' | 'Bulk' | 'TwoTone'

export interface IListIconLink {
  direction?: Direction
  spacing?: number
  listIcon: IListIcon[]
  variant?: Variant
  size?: string | number
  color?: string
  className?: string
  hover?: boolean
}

export interface IListIcon {
  url: string
  Icon: Icon
}
