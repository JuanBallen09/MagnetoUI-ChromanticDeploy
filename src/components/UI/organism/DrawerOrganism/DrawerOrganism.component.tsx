import React from 'react'
import { Drawer } from '../../molecules/Drawer'
import { IDrawerOrganism } from './DrawerOrganism.interface'
import { ActiosContainer, MenuContainer, withStyles } from './DrawerOrganism.styles'
import { ListMenuItems } from '../../molecules/ListMenuItems'
import { ListIconLink } from '../../molecules/ListIconLink'
import { HeaderDrawerTabs } from '../../molecules/HeaderDrawerTabs/HeaderDrawerTabs.components'
import { MainButton } from '../../atoms/MainButton'

const Component: React.FC<IDrawerOrganism> = ({
  className,
  listIcon,
  headerProps,
  buttonsProps,
  buttonsProps2,
  listMenuProps
}) => {
  return (
    <div className={className}>
      <Drawer direction="left" isOpen={true} onClose={() => ({})}>
        <HeaderDrawerTabs {...headerProps} />
        <MenuContainer>
          <ListMenuItems {...listMenuProps} />
        </MenuContainer>
        <ActiosContainer>
          <MainButton btnSize="full" {...buttonsProps} />
          <MainButton btnSize="full" {...buttonsProps2} />
          <ListIconLink listIcon={listIcon} />
        </ActiosContainer>
      </Drawer>
    </div>
  )
}

export const DrawerOrganims = withStyles(Component)
