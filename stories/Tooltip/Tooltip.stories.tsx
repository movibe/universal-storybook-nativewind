import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../components/ui/tooltip';
import { Text } from '../../components/ui/text';

const TooltipMeta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default TooltipMeta;

export const Default: StoryObj<typeof Tooltip> = {
  render: () => (
    <Tooltip>
      <TooltipTrigger>
        <Text>Hover me</Text>
      </TooltipTrigger>
      <TooltipContent>
        <Text>This is a tooltip</Text>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithCustomContent: StoryObj<typeof Tooltip> = {
  render: () => (
    <Tooltip>
      <TooltipTrigger>
        <Text>Custom Tooltip</Text>
      </TooltipTrigger>
      <TooltipContent>
        <View style={{ padding: 8 }}>
          <Text className="font-bold">Custom Title</Text>
          <Text>This is a custom tooltip with more content</Text>
        </View>
      </TooltipContent>
    </Tooltip>
  ),
}; 