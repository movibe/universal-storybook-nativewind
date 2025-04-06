import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
        import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info } from '@/lib/icons/Info';
import { Sun } from '@/lib/icons/Sun';

const AlertMeta: Meta<typeof Alert> = {
  title: 'Alert',
  component: Alert,
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default AlertMeta;

export const Default: StoryObj<typeof Alert> = {
    render: () => (
      <View className='flex-1 gap-4'>
      <Alert icon={Info} className='max-w-xl'>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can use a terminal to run commands on your computer.
        </AlertDescription>
      </Alert>
      <Alert icon={Sun} variant='destructive' className='max-w-xl'>
        <AlertTitle>Danger!</AlertTitle>
        <AlertDescription>
          High voltage. Do not touch. Risk of electric shock. Keep away from children.
        </AlertDescription>
      </Alert>
      </View>
    )
};
