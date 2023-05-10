import { Meta, StoryObj } from '@storybook/react'
import { HeaderDrawerCompany } from './HeaderDrawerCompany.components'

const LogoMagneto =
  'https://www.magneto365.com/co/_next/image?url=https%3A%2F%2Fstatic.magneto365.com%2Fco%2F_next%2Fstatic%2Fmedia%2Ffavicon-magneto.b463e35d.png&w=32&q=75'
const LogoCompany = 'https://www.magneto365.com/wp-content/uploads/2022/08/img-grupo-sura.png'
const flag =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/2560px-Flag_of_Colombia.svg.png'

const meta: Meta<typeof HeaderDrawerCompany> = {
  title: 'Molecules/Header Drawer Company',
  component: HeaderDrawerCompany,
  args: {
    logo: LogoMagneto,
    logoCompany: LogoCompany,
    alt: 'Logo Magneto',
    logoCompanyAlt: 'Logo Sura',
    logoSize: 40,
    logoCompanySize: 80,
    spacing: 20,
    flag,
    flagAlt: 'Colombia'
  }
}

export default meta

type Story = StoryObj<typeof HeaderDrawerCompany>

export const Default: Story = {}
