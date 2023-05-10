import { Meta, StoryObj } from '@storybook/react'
import { HeaderDrawerTabs } from './HeaderDrawerTabs.components'

const ListButton = [
  { link: '#', text: 'Busco empleo', size: '11px', color: '#FFF', textColor: '#000' },
  { link: '#', text: 'Soy empresa', size: '11px', color: '#F4F4FA', textColor: '#A3A3B5' }
]

const LogoMagneto = 'https://www.magneto365.com/wp-content/uploads/2022/09/Logo-magneto-v3.png'
const IsoLogoMagneto =
  'https://www.magneto365.com/co/_next/image?url=https%3A%2F%2Fstatic.magneto365.com%2Fco%2F_next%2Fstatic%2Fmedia%2Ffavicon-magneto.b463e35d.png&w=32&q=75'

const meta: Meta<typeof HeaderDrawerTabs> = {
  title: 'Molecules/Header Drawer Tabs',
  component: HeaderDrawerTabs,
  args: {
    listButton: ListButton,
    isoType: IsoLogoMagneto,
    logo: LogoMagneto,
    alt: 'Logo Magneto',
    logoSize: 100,
    spacing: 20,
    isoTypeSize: 50
  }
}

export default meta

type Story = StoryObj<typeof HeaderDrawerTabs>

export const Default: Story = {}
