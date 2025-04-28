import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  variant: 'secondary',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  variant: 'primary',
  disabled: true,
};