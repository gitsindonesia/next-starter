import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dropdown, DropdownItem } from './Dropdown';

const items = (length = 3) =>
  Array.from({ length }, (v, k) => ({
    text: `Item ${k + 1}`,
  }));

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

function DropdownItems({ length = 3 }) {
  return (
    <div className="p-1">
      {items().map((item, idx) => (
        <DropdownItem {...item} key={idx} />
      ))}
    </div>
  );
}

export const Default: ComponentStory<typeof Dropdown> = () => (
  <Dropdown label="Dropdown">
    <DropdownItems />
  </Dropdown>
);

export const SeparatedItems: ComponentStory<typeof Dropdown> = () => (
  <Dropdown label="Dropdown">
    <DropdownItems />
    <DropdownItems />
  </Dropdown>
);
