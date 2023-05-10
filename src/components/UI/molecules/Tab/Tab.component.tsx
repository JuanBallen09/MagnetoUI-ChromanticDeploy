import React from 'react'
import { TabButton, ITabButton } from '../TabButton'
import { ITab } from './Tab.interface'
import { withStyles } from './Tab.styles'

const Component: React.FC<ITab> = ({ listButton, className }) => {
  return (
    <div className={className}>
      {listButton?.map(({ link, text, size, color, textColor, textWeight, boxShadow }: ITabButton, index: number) => (
        <TabButton
          link={link}
          text={text}
          size={size}
          color={color}
          textColor={textColor}
          textWeight={textWeight}
          key={index}
          boxShadow={boxShadow}
        />
      ))}
    </div>
  )
}

/**
 * Molecule UI for Tab
 */

export const Tab = withStyles(Component)
