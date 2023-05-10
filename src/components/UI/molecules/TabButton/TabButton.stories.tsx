import { TabButton } from './TabButton.component'
import { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof TabButton> = {
  title: 'Molecules/Tab Button',
  component: TabButton,
  args: {
    link: '#',
    text: 'Busco Empleo',
    size: '11px',
    color: '#FFF',
    textColor: '#000',
    boxShadow: true
  }
}

export default meta

type Story = StoryObj<typeof TabButton>

export const Default: Story = {}

export const Untoggle: Story = {
  args: { ...Default.args, text: 'Soy empresa', color: '#F4F4FA', textColor: '#A3A3B5', boxShadow: false }
}
