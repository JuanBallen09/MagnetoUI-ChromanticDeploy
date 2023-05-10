import React, { useContext, useMemo } from 'react'
import { LogoComponent } from '../../atoms/Logo'
import { Tab } from '../Tab'
import { ResponsiveContext } from '../../../context/ResponsiveContext.component'
import { screenSize } from '../../../../constants/responsive.constants'
import { IHeaderDrawerTabs } from './HeaderDrawerTabs.interface'
import { withStyles } from './HeaderDrawerTabs.styles'

const Component: React.FC<IHeaderDrawerTabs> = ({
  className,
  logo,
  isoType,
  isoTypeSize,
  listButton,
  alt,
  logoSize
}) => {
  const { dim } = useContext(ResponsiveContext)

  const isMobile = useMemo(() => {
    return dim.size <= screenSize.md
  }, [dim.size])

  return (
    <div className={className}>
      <LogoComponent
        logo={logo}
        isoType={isoType}
        alt={alt}
        isoSize={isoTypeSize}
        isoView={isMobile}
        logoSize={logoSize}
      />
      <Tab listButton={listButton} />
    </div>
  )
}

export const HeaderDrawerTabs = withStyles(Component)
