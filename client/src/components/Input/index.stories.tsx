import type { Meta, StoryObj } from '@storybook/react';

import Input from './';

export default {
  title: 'Input',
  component: Input,
  args: {
    color: 'auto',
    label: 'Label',
    placeholder: 'Placeholder',
    size: 'medium',
    value: '',
    isValid: true,
    autoComplete: 'off',
    iconData: {
      iconSrc: '/images/svgs/eye.opened.svg',
      onClick: () => {},
    },
  },
  // prettier-ignore
  argTypes: {
    id: { table: { disable: true } },
    className: { table: { disable: true } },
    onClick: { table: { disable: true } },
    setIsValid: { table: { disable: true } },
    validationData: { table: { disable: true } },
    existanceData: { table: { disable: true } },
    customTest: { table: { disable: true } },
    customDependancies: { table: { disable: true } },
    multiInputData: { table: { disable: true } },
    onChangeMultiInputData: { table: { disable: true } },
    focusOnLoad: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    color: 'indigo',
  },
};
