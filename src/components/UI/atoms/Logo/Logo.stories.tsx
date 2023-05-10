import { Meta, StoryObj } from '@storybook/react'
import { LogoComponent } from './Logo.component'

const LogoMagneto = 'https://www.magneto365.com/wp-content/uploads/2022/09/Logo-magneto-v3.png'
const IsoLogoMagneto =
  'https://www.magneto365.com/co/_next/image?url=https%3A%2F%2Fstatic.magneto365.com%2Fco%2F_next%2Fstatic%2Fmedia%2Ffavicon-magneto.b463e35d.png&w=32&q=75'

const meta: Meta<typeof LogoComponent> = {
  title: 'Atoms/Logo',
  component: LogoComponent,
  tags: ['autodocs'],
  args: { alt: 'Logo Magneto', isoType: IsoLogoMagneto, logo: LogoMagneto, isoView: false, isoSize: 50, logoSize: 100 },
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof LogoComponent>

export const Default: Story = {}

export const IsoLogo: Story = {
  args: {
    isoView: true
  }
}
