import type { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';
import { Button, toast, Toaster } from '../../components';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Toaster> = {
  title: 'UI-Components/Toast',
  // component: () => {
  //     const { toast } = useToast();
  //     return (
  //         <Button
  //             onClick={() => {
  //                 toast({
  //                     title: "Scheduled: Catch up",
  //                     description: "Friday, February 10, 2023 at 5:57 PM",
  //                 });
  //             }}
  //             outline
  //         >
  //             Show Toast
  //         </Button>
  //     );
  // },
  decorators: [
    (Story: any) => (
      <Fragment>
        <div className="h-[300px] w-full">
          <Story />
          <Toaster />
        </div>
      </Fragment>
    ),
  ],
  // parameters: {
  //     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  //     layout: "centered",
  // },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <Button
        onClick={() => {
          toast({
            title: 'Scheduled: Catch up',
            description: 'Friday, February 10, 2023 at 5:57 PM',
            type: 'success',
          });
        }}
        outline
      >
        Show Toast
      </Button>
    );
  },
};
Example.args = {};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
