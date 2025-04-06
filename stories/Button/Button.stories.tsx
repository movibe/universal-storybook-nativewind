import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

type ButtonStoryProps = ButtonProps & {
  text: string;
};

const ButtonMeta: Meta<ButtonStoryProps> = {
  title: 'Button',
  component: Button,
  args: {
    text: 'Button',
  },
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default ButtonMeta;

export const Basic: StoryObj<ButtonStoryProps> = {
  render: (args) => (
    <Button {...args}>
      <Text>{args.text}</Text>
    </Button>
  ),
};
