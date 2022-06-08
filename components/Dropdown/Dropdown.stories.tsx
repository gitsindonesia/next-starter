import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

export const Default: ComponentStory<typeof Dropdown> = () => <Dropdown />;
