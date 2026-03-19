import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../components/ui/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI-Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      options: [
        'primary',
        'secondary',
        'neutral',
        'success',
        'warning',
        'danger',
        'gray',
      ],
      control: { type: 'select' },
      description: 'Set button variant',
      type: 'string',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
      description: 'Set the size of button',
      type: 'string',
    },
    shape: {
      options: ['rounded', 'circle'],
      control: { type: 'select' },
      description: 'Can be set button shape',
      type: 'string',
    },
    icon: {
      options: [true, false],
      type: 'boolean',
      control: { type: 'boolean' },
      description: 'Button with only icon',
    },
    outline: {
      options: [true, false],
      type: 'boolean',
      control: { type: 'boolean' },
      description: 'Set button outline',
    },
    disabled: {
      options: [true, false],
      type: 'boolean',
      control: { type: 'boolean' },
      description: 'Set button disabled',
    },
    className: {
      type: 'string',
      description: 'Semantic DOM class',
      defaultValue: '',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Button',
    shape: 'rounded',
    icon: false,
    outline: false,
    disabled: false,
    className: '',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'lg',
    children: 'Button',
    shape: 'rounded',
    icon: false,
    outline: false,
    disabled: false,
    className: '',
  },
};

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    size: 'lg',
    children: 'Button',
    shape: 'rounded',
    icon: false,
    outline: false,
    disabled: false,
    className: '',
  },
};

export const ButtonOutline: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Button',
    shape: 'rounded',
    icon: false,
    outline: true,
    disabled: false,
    className: '',
  },
};

export const ButtonCircle: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Button',
    shape: 'circle',
    icon: false,
    outline: false,
    disabled: false,
    className: '',
  },
};

export const SizeLarge: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Button',
    shape: 'rounded',
    icon: false,
    outline: false,
    disabled: false,
    className: '',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Button',
    shape: 'rounded',
    icon: false,
    outline: false,
    disabled: true,
    className: '',
  },
};

export const IconButton: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Icon',
    shape: 'circle',
    icon: true,
    outline: false,
    disabled: false,
    className: '',
  },
};
