import { IMainButton } from '../../atoms/MainButton'
import { IHeaderDrawerTabs } from '../../molecules/HeaderDrawerTabs/HeaderDrawerTabs.interface'
import { IListIcon } from '../../molecules/ListIconLink'
import { IListMenuItems } from '../../molecules/ListMenuItems/ListMenuItems.interface'

export interface IDrawerOrganism {
  className: string
  /**
   * Here is the icon list component
   */
  listIcon: IListIcon[]
  /**
   * Here is the menu list component
   */
  listMenuProps: IListMenuItems
  /**
   * Here is drawer header tabs component
   */
  headerProps: IHeaderDrawerTabs
  /**
   * Here is main button component
   */
  buttonsProps: IMainButton
  /**
   * Here is main button component
   */
  buttonsProps2: IMainButton
}
