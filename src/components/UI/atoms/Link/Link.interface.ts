import { Icon } from 'iconsax-react'

export type LinkType = 'button' | 'link'

export interface ILinkProps {
  Icon?: Icon
  /**
   * set the font color in the link.
   */
  color?: string
  /**
   * Button color
   */
  btnColor?: string
  /**
   * Hover Color
   */
  colorHover?: string
  /**
   * color when :visited pseudo-class is applied.
   */
  colorVisited?: string
  /**
   * change the base component style.
   */
  type: LinkType
  href: string
  /**
   * text displayed in the component
   */
  label: string
  className?: string
}
