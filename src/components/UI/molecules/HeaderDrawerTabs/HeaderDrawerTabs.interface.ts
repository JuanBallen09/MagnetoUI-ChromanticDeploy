import { ITabButton } from '../TabButton'

export interface IHeaderDrawerTabs {
  className?: string
  logo: string
  logoSize: number
  alt: string
  isoType: string
  isoTypeSize?: number
  listButton?: ITabButton[]
  spacing?: number
}
