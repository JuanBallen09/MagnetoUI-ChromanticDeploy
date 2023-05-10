import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import MenuItem from './MenuItem.component'

export default {
  title: 'Atoms/Menu Item',
  component: MenuItem,
  args: { isActive: false, text: 'Text Here!', url: '#' },
  argTypes: {
    text: {
      name: 'text',
      description: 'You can add any text here',
      type: { name: 'string', required: true }
    },
    isActive: {
      name: 'isActive',
      description: 'When isActive property is "true" you can change style of the menu item'
    },
    url: {
      name: 'url',
      description: 'Put here the destination url',
      type: { name: 'string', required: false }
    }
  }
} as ComponentMeta<typeof MenuItem>

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />

export const Default = Template.bind({})

export const IsActive = Template.bind({})
IsActive.args = {
  isActive: true
}
