import type { Meta, StoryObj } from '@storybook/react';

import Input from './';

export default {
  title: 'Input',
  component: Input,
  args: {
    type: 'text',
    autoComplete: 'off',
    size: 'medium',
    color: 'auto',
    label: 'Label',
    placeholder: 'Placeholder',
    value: '',
    icon: '/images/svgs/eye.opened.svg',
    isError: false,
    errorNote: '',
  },
  // prettier-ignore
  argTypes: {
    id: { table: { disable: true } },
    className: { table: { disable: true } },
    onClick: { table: { disable: true } },
    focusOnLoad: { table: { disable: true } },
    onChange: { table: { disable: true } },
    onIconClick: { table: { disable: true } },
    multiInputData: { table: { disable: true } },
    onChangeMultiInputData: { table: { disable: true } },
  },
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    color: 'indigo',
  },
};
