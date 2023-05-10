import React from 'react'
import { IconItem } from '../Icon'
import { IMainButton } from './MainButton.interface'
import { withStyles } from './MainButton.styles'

const Component: React.FC<IMainButton> = ({ className, btnSize = 'medium', childrenProps, buttonText, onClick }) => {
  return (
    <button type={'submit'} className={`${className} ${btnSize}`} onClick={onClick}>
      <IconItem {...childrenProps} />
      <p>{buttonText}</p>
    </button>
  )
}
/**
 * Atom UI component of button for general purpose
 */
export const MainButton = withStyles(Component)
