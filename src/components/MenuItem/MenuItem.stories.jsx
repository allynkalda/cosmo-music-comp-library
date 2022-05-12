import React from 'react';

import { MenuItem } from './MenuItem';

export default {
  title: 'Example/Menu Item',
  component: MenuItem
};

const Template = (args) => <MenuItem {...args} />;

export const NormalMenuItem = Template.bind({});
NormalMenuItem.args = {
  label: 'Menu Item',
};
