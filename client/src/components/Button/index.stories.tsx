import Button from './';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
    size: 'medium',
    color: undefined,
    type: undefined,
    isPrimary: false,
    isDisabled: false,
    isLoading: false,
    isScale: false,
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {},
};
