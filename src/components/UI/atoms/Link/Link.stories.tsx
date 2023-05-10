import { Link } from './Link.component'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  args: {
    type: 'link',
    label: 'Hello world',
    colorHover: '#14141C',
    color: '#14141C'
  },
  argTypes: {
    colorHover: { control: 'color' }
  }
}

export default meta

type Story = StoryObj<typeof Link>

export const Anchor: Story = {}

export const Button: Story = {
  args: {
    type: 'button'
  }
}
