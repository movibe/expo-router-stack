import { Meta, StoryObj } from '@storybook/react-native'

import { base } from '../base'
import { Button, ButtonProps } from './index'

const meta: Meta<ButtonProps> = {
  argTypes: {
    onPress: {
      action: 'onPress event'
    }
  },
  component: Button,
  title: `${base.name}/Button`
}

export default meta

type Story = StoryObj<ButtonProps>

export const Basic: Story = {
  args: {
    children: 'Tap me',
    disabled: false
  },
  storyName: 'Basic'
}

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true
  }
}
