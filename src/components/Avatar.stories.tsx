import React from 'react';
import Avatar from './Avatar';
import { expect } from '@storybook/jest';
import { getByRole, userEvent, waitFor, within } from '@storybook/testing-library';

export default {
  title: 'Components / Avatar',
  component: Avatar,
};

const Template = (args) => <div data-testId='av'><Avatar  {...args} /></div>;

export const PassingTest = Template.bind({});

// PassingTest.play = async ({ canvasElement, args }) => {
//   const canvas = within(canvasElement);
//   const wrapper = await canvas.getByTestId('av');
//   await expect(wrapper).not.toBeNull();
//   await expect(wrapper.children.length).toBe(1);
// };

export const FailingTest = Template.bind({});

FailingTest .play = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  const wrapper = await canvas.getByTestId('av');
  await expect(wrapper).not.toBeNull();
  await expect(wrapper.children.length).toBe(2);
};