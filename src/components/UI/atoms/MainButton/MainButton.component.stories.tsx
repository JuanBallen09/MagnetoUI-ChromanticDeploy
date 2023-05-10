import { Meta, StoryObj } from '@storybook/react'
import { MainButton } from './MainButton.component'
import { ProfileAdd } from 'iconsax-react'

const meta: Meta<typeof MainButton> = {
  title: 'Atoms/MainButton',
  component: MainButton,
  args: {
    buttonText: 'Crear hoja de vida',
    textColor: '#090467',
    btnColor: '#70ECD4',
    childrenProps: {
      Icon: ProfileAdd,
      hover: true,
      color: '#090467 '
    }
  }
}

export default meta

type Story = StoryObj<typeof MainButton>

export const Default: Story = {}
