import React from 'react'
import { ILinkProps } from './Link.interface'
import { withStyles } from './Link.styles'
import { IconItem } from '../Icon'

const Component: React.FC<ILinkProps> = ({ href, label, className, Icon }) => (
  <a className={className} href={href}>
    {Icon && <IconItem Icon={Icon} hover={true} />}
    <p>{label}</p>
  </a>
)

/**
 * Atomic UI component for Link
 */
export const Link = withStyles(Component)
