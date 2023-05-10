import { ListIconLink } from './ListIconLink.component'
import { StoryObj, Meta } from '@storybook/react'
import { Facebook, Instagram, Link21 } from 'iconsax-react'

const ListIcon = [
  { Icon: Facebook, url: '' },
  { Icon: Instagram, url: '' },
  { Icon: Link21, url: '' }
]

const meta: Meta<typeof ListIconLink> = {
  title: 'Molecules/List Icon Link',
  component: ListIconLink,
  args: {
    listIcon: ListIcon,
    direction: 'row',
    spacing: 5,
    variant: 'Linear',
    size: 20
  },

  argTypes: {
    spacing: {
      name: 'spacing',
      description: 'Add spacing between icon',
      type: { name: 'number', required: false }
    },
    variant: {
      name: 'variant',
      description: 'Change icon style',
      control: 'select',
      options: ['Linear', 'Outline', 'Broken', 'Bold', 'Bulk', 'TwoTone']
    },
    size: {
      name: 'size',
      description: 'Change icon style',
      type: { name: 'number', required: false }
    },
    color: {
      name: 'color',
      description: 'Change icon color',
      control: 'color'
    },
    direction: {
      name: 'direction',
      description: 'Change icon direction',
      control: 'select',
      options: ['row', 'column']
    },
    listIcon: {
      control: false
    }
  }
}

export default meta

type Story = StoryObj<typeof ListIconLink>

export const Default: Story = {}

export const Vertical: Story = {
  args: {
    direction: 'column'
  }
}

export const Spacing: Story = {
  args: {
    spacing: 20
  }
}

export const SetColors: Story = {
  args: {
    color: 'red'
  }
}

export const ChangeStyle: Story = {
  args: {
    variant: 'TwoTone'
  }
}
