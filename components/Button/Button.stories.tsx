import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button, {
  ButtonSizes,
  ButtonVariants,
  getVariants,
  sizes,
} from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div className="flex items-end gap-2">
    {getVariants().map((variant) => (
      <Button variant={variant as ButtonVariants} key={variant} {...args}>
        {variant}
      </Button>
    ))}
  </div>
);

export const Variants = Template.bind({});
Variants.args = {};

export const Outlined = Template.bind({});
Outlined.args = { outlined: true };

export const Text = Template.bind({});
Text.args = { text: true };

export const Rounded = Template.bind({});
Rounded.args = { rounded: true };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const Sizes: ComponentStory<typeof Button> = () => (
  <div className="flex items-end gap-2">
    {Object.keys(sizes).map((size) => (
      <Button size={size as ButtonSizes} key={size}>
        button: {size}
      </Button>
    ))}
  </div>
);
