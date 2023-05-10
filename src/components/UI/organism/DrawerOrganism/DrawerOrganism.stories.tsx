import { Meta, StoryObj } from '@storybook/react'
import { DrawerOrganims } from './DrawerOrganism.component'
import { Facebook, Instagram, Link21, ProfileAdd } from 'iconsax-react'

const ButtonsProps = {
  buttonText: 'Crear hoja de vida',
  textColor: '#090467',
  btnColor: '#70ECD4',
  childrenProps: {
    Icon: ProfileAdd,
    hover: true,
    color: '#090467 '
  }
}
const ButtonsProps2 = {
  buttonText: 'Iniciar Sesión',
  textColor: '#090467',
  childrenProps: {
    Icon: ProfileAdd,
    hover: true,
    color: '#090467 '
  }
}

const listMenuProps = {
  menuList: [
    { text: 'Todos los empleos', url: '#', slug: 'todos-los-empleos' },
    { text: 'Empleos por ciudad', url: '#', slug: 'empleos-por-ciudad' },
    { text: 'Empleos por empresa', url: '#', slug: 'empleos-por-empresa' },
    { text: 'Empleos por sector laboral', url: '#', slug: 'empleos-por-sector-laboral' },
    { text: 'Empleos por cargo profesional', url: '#', slug: 'empleos-por-cargo-profesional' },
    { text: 'Empleos mas buscandos', url: '#', slug: 'empleos-mas-buscandos' },
    { text: 'Preguntas Frecuentes', url: '#', slug: 'preguntas-frecuentes' },
    { text: 'Articulos de interes', url: '#', slug: 'articulos-de-interes' }
  ],
  urlParam: 'empleos-por-empresa'
}

const headerProps = {
  alt: 'Logo Magneto',
  logoSize: 100,
  spacing: 20,
  isoTypeSize: 30,
  logo: 'https://www.magneto365.com/wp-content/uploads/2022/09/Logo-magneto-v3.png',
  isoType:
    'https://www.magneto365.com/co/_next/image?url=https%3A%2F%2Fstatic.magneto365.com%2Fco%2F_next%2Fstatic%2Fmedia%2Ffavicon-magneto.b463e35d.png&w=32&q=75',

  listButton: [
    { link: '#', text: 'Busco empleo', size: '11px', color: '#FFF', textColor: '#000' },
    { link: '#', text: 'Soy empresa', size: '11px', color: '#F4F4FA', textColor: '#A3A3B5' }
  ]
}
const ListIcon = [
  { Icon: Facebook, url: '' },
  { Icon: Instagram, url: '' },
  { Icon: Link21, url: '' }
]

const meta: Meta<typeof DrawerOrganims> = {
  title: 'Organism/Drawer',
  component: DrawerOrganims,
  tags: ['autodocs'],
  args: {
    listIcon: ListIcon,
    buttonsProps: ButtonsProps,
    buttonsProps2: ButtonsProps2,
    headerProps: headerProps,
    listMenuProps: listMenuProps
  },
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof DrawerOrganims>

export const Default: Story = {}
