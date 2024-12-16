import type { Meta, StoryObj } from '@storybook/react';
import  MyCard from './MyCard';

// import { within } from '@storybook/testing-library';
// import { expect } from '@storybook/jest';

const meta: Meta<typeof MyCard> = {
  component: MyCard,
  title: 'WxCoreUI/Components/MyCard',
};
export default meta;
type Story = StoryObj<typeof MyCard>;

export const Outlined: Story = {};

