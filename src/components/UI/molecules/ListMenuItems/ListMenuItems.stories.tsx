import { Meta, StoryObj } from '@storybook/react'
import { ListMenuItems } from './ListMenuItems.component'
import { MenuItemInfo } from './ListMenuItems.interface'

const urlParams = 'empleos-por-empresa'

const MenuList: MenuItemInfo[] = [
  { text: 'Todos los empleos', url: '#', slug: 'todos-los-empleos' },
  { text: 'Empleos por ciudad', url: '#', slug: 'empleos-por-ciudad' },
  { text: 'Empleos por empresa', url: '#', slug: 'empleos-por-empresa' },
  { text: 'Empleos por sector laboral', url: '#', slug: 'empleos-por-sector-laboral' },
  { text: 'Empleos por cargo profesional', url: '#', slug: 'empleos-por-cargo-profesional' },
  { text: 'Empleos mas buscandos', url: '#', slug: 'empleos-mas-buscandos' },
  { text: 'Preguntas Frecuentes', url: '#', slug: 'preguntas-frecuentes' },
  { text: 'Articulos de interes', url: '#', slug: 'articulos-de-interes' }
]

const meta: Meta<typeof ListMenuItems> = {
  title: 'Molecules/List Menu Items',
  component: ListMenuItems,
  args: { menuList: MenuList, urlParam: urlParams },
  argTypes: {
    menuList: {
      name: 'menuList',
      description: 'You have to put an array with the menu list'
    },
    urlParam: {
      name: 'urlParam',
      description: 'You must set the url parameter to validate the active status of the menu item.'
    }
  }
}

export default meta

type Story = StoryObj<typeof ListMenuItems>

export const Default: Story = {}
