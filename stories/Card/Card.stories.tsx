import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card';
import { Text } from '@/components/ui/text';

const CardMeta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default CardMeta;

export const Default: StoryObj<typeof Card> = {
  render: () => (
    <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <Text>Card Content</Text>
        </CardContent>
        <CardFooter>
          <Text>Card Footer</Text>
        </CardFooter>
      </Card>
  ),
};

export const WithoutFooter: StoryObj<typeof Card> = {
  render: () => (
    <Card>
      <CardContent>
        <View style={{ padding: 16 }}>
          <Text>This is a simpler card example</Text>
        </View>
      </CardContent>
    </Card>
  ),
}; 