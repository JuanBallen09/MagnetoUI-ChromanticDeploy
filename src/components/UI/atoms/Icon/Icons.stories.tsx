import { IconItem } from './Icon.component'
import { Facebook } from 'iconsax-react'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof IconItem> = {
  title: 'Atoms/Icon',
  component: IconItem,
  args: {
    Icon: Facebook,
    size: 20,
    color: '#2c2c2c',
    variant: 'Linear',
    hover: true
  },
  argTypes: {
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
      description: 'Change icon color',
      control: 'color'
    },
    hover: {
      description: 'You can disable the hover animation'
    },
    Icon: {
      control: false
    }
  }
}

export default meta

type Story = StoryObj<typeof IconItem>

export const Default: Story = {}

export const DisabledHover: Story = {
  args: {
    hover: false
  }
}

export const IconBold: Story = {
  args: {
    variant: 'Bold'
  }
}

export const IconBulk: Story = {
  args: {
    variant: 'Bulk'
  }
}

export const IconBroken: Story = {
  args: {
    variant: 'Broken'
  }
}

export const IconTwoTone: Story = {
  args: {
    variant: 'TwoTone'
  }
}
