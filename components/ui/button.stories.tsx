import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { View } from 'react-native';

import { Button } from './button';
import { Text } from './text';

const meta = {
  title: 'Example/Button',
  component: Button,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Story />
      </View>
    ),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onPress arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onPress: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
  },
  render: (args) => (<Button {...args} >
    <Text>Botão</Text>
    </Button>),
};
