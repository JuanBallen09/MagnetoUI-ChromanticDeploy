import React from 'react'
import { ILogoComponent } from './Logo.interface'
import { withStyles } from './Logos.styles'

const Component: React.FC<ILogoComponent> = ({ isoView = false, logo, isoType, alt, className }) => {
  return <img className={className} src={isoView ? isoType : logo} alt={alt} />
}

export const LogoComponent = withStyles(Component)
