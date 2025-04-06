import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../../components/ui/text';

const TextMeta: Meta<typeof Text> = {
  title: 'Text',
  component: Text,
  args: {
    children: 'Hello World',
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default TextMeta;

export const Default: StoryObj<typeof Text> = {};

export const Large: StoryObj<typeof Text> = {
  args: {
    className: 'text-lg',
    children: 'Large Text',
  },
};

export const Small: StoryObj<typeof Text> = {
  args: {
    className: 'text-sm',
    children: 'Small Text',
  },
}; 