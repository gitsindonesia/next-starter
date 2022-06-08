import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button, { ButtonSizes, ButtonVariants, sizes, variants } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Variants: ComponentStory<typeof Button> = () => (
  <div className="flex items-end gap-2">
    {Object.keys(variants).map((variant) => (
      <Button variant={variant as ButtonVariants} key={variant}>
        {variant}
      </Button>
    ))}
  </div>
);

export const Sizes: ComponentStory<typeof Button> = () => (
  <div className="flex items-end gap-2">
    {Object.keys(sizes).map((size) => (
      <Button size={size as ButtonSizes} key={size}>
        button: {size}
      </Button>
    ))}
  </div>
);
