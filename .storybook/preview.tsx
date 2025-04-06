import type { Preview } from "@storybook/react";
import React from 'react';
import { ThemeProviderWrapper } from '../components/ThemeProviderWrapper';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story) => (
      <ThemeProviderWrapper>
        <Story />
      </ThemeProviderWrapper>
    ),
  ],
};

export default preview;
