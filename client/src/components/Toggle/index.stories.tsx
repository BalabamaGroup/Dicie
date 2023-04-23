import type { Meta, StoryObj } from '@storybook/react';

import Toggle from './';

export default {
  title: 'Toggle',
  component: Toggle,
  args: {
    value: false,
    size: 'medium',
    color: 'indigo',
  },
  // prettier-ignore
  argTypes: {
    className: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
} as Meta<typeof Toggle>;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {},
};
