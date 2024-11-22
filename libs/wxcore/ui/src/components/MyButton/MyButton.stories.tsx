import type { Meta, StoryObj } from '@storybook/react';
import { MyButton } from './MyButton';

// import { within } from '@storybook/testing-library';
// import { expect } from '@storybook/jest';

const meta: Meta<typeof MyButton> = {
  component: MyButton,
  title: 'Example/MyButton',
};
export default meta;
type Story = StoryObj<typeof MyButton>;

export const Text: Story = {
  args: {
    label: 'My Button',
    disabled: false,
  },
};

export const Outlined: Story = {
  args: {
    label: "My Button",
    disabled: false,
    variant: "outlined"
  }
};

export const Contained: Story = {
  args: {
    label: "My Button",
    disabled: false,
    variant: "contained"
  }
};

// export const Heading: Story = {
//   args: {
//     label: 'My Button',
//     disabled: false,
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/Welcome to MyButton!/gi)).toBeTruthy();
//   },
// };