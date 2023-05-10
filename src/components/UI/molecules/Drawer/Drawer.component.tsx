import React from 'react'
import { Add } from 'iconsax-react'
import { IconItem } from '../../atoms/Icon'
import { IDrawer } from './Drawer.interface'
import { withStyles } from './Drawer.styles'
import { DrawerPortal } from './DrawerPortal'

const Component: React.FC<IDrawer> = ({ className, children, onClose, isOpen }) => {
  return (
    <DrawerPortal>
      <div className={className}>
        <aside>
          <button className="btnClose-MG-UI" onClick={onClose}>
            <IconItem Icon={Add} hover={false} />
          </button>
          {children}
        </aside>
        {isOpen && <span onClick={onClose} />}
      </div>
    </DrawerPortal>
  )
}

/**
 * Molecule UI component for Drawer
 */

export const Drawer = withStyles(Component)
