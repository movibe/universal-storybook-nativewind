import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../../components/ui/avatar';

const AvatarMeta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/shadcn.png',
    alt: 'User avatar',
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default AvatarMeta;

export const Default: StoryObj<typeof Avatar> = {};

export const WithFallback: StoryObj<typeof Avatar> = {
  args: {
    src: 'https://invalid-url.com/avatar.png',
    fallback: 'CN',
  },
};

export const Large: StoryObj<typeof Avatar> = {
  args: {
    className: 'h-16 w-16',
  },
}; 