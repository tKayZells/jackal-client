import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Button } from './Button';

export default {
	title: 'Atoms/Button',
	component: Button,
	argTypes: {
		size: { control: 'select', options: ['small', 'medium', 'large'] },
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
	<Button onClick={action('onClick')} {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
	label: 'Button',
};
