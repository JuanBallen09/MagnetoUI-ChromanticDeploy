import React from 'react'
import ReactDOM from 'react-dom'
import { IDrawerPortal } from './Drawer.interface'

const portalNode = document.createElement('div')
portalNode.classList.add('magneto-ui-drawer')
document.body.appendChild(portalNode)

export const DrawerPortal: React.FC<IDrawerPortal> = ({ children }) => {
  return ReactDOM.createPortal(children, portalNode)
}
