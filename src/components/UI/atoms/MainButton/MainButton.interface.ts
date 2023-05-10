import { IconProps } from '../Icon'

type ButtonSizes = 'small' | 'medium' | 'large' | 'full'

export interface IMainButton {
  /**
   * Children Props
   */
  childrenProps: IconProps
  /**
   * Text content of the button
   */
  buttonText: string
  /**
   * Button color
   */
  btnColor?: string
  /**
   * Text Color
   */
  textColor?: string
  /**
   * How large should the button be?
   */
  btnSize?: ButtonSizes
  /**
   * Optional click handler
   */
  onClick?: () => void
  className?: string
}
