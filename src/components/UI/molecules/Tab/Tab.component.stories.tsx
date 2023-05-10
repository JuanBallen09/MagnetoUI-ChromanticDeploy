import { Meta, StoryObj } from '@storybook/react'
import { Tab } from './Tab.component'

const ListButton = [
  {
    link: '#',
    text: 'Busco empleo',
    size: '11px',
    color: '#FFF',
    textColor: '#000',
    textWeight: '900',
    boxShadow: true
  },
  { link: '#', text: 'Soy empresa', size: '11px', color: '#F4F4FA', textColor: '#A3A3B5' }
]

const meta: Meta<typeof Tab> = {
  title: 'Molecules/Tab',
  component: Tab,
  args: {
    listButton: ListButton
  }
}

export default meta

type Story = StoryObj<typeof Tab>

export const Default: Story = {}
