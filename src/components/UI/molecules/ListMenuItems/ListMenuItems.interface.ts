import { IMenuItem } from '../../atoms/MenuItem/MenuItem.interface'

export interface MenuItemInfo extends Omit<IMenuItem, 'isActive'> {
  slug: string
}

export interface IListMenuItems {
  menuList: MenuItemInfo[]
  urlParam: string
}
