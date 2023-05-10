import React from 'react'
import { ArrowRight2 } from 'iconsax-react'
import { IMenuItem } from './MenuItem.interface'
import { withStyles } from './MenuItem.styles'

const MenuItem: React.FC<IMenuItem> = ({ className, url = '#', text = '' }) => (
  <li>
    <a href={url} className={className}>
      <ArrowRight2 color="black" />
      <p>{text}</p>
    </a>
  </li>
)

export default withStyles(MenuItem)
