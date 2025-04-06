import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '../../components/ui/progress';

const ProgressMeta: Meta<typeof Progress> = {
  title: 'Progress',
  component: Progress,
  args: {
    value: 50,
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default ProgressMeta;

export const Default: StoryObj<typeof Progress> = {};

export const Complete: StoryObj<typeof Progress> = {
  args: {
    value: 100,
  },
};

export const Empty: StoryObj<typeof Progress> = {
  args: {
    value: 0,
  },
}; 