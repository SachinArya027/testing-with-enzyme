import React from 'react';
import { mount } from 'enzyme';

import Root from 'components/Root';
import CommentBox from 'components/CommentBox';

let wrapper;

beforeEach(() => {
	wrapper = mount(
		<Root>
			<CommentBox />
		</Root>
	);
});

afterEach(() => {
	wrapper.unmount();
});

it('shows a text area and two button', () => {
	expect(wrapper.find('textarea')).toHaveLength(1);
	expect(wrapper.find('button')).toHaveLength(2);
});

it('has a default empty value', () => {
	expect(wrapper.find('textarea').prop('value')).toEqual('');
});

describe('the text area', () => {
	const newValue = 'new comment';
	beforeEach(() => {
		wrapper
			.find('textarea')
			.simulate('change', { target: { value: newValue } });

		wrapper.update();
	});

	it('updates the new value', () => {
		expect(wrapper.find('textarea').prop('value')).toEqual(newValue);
	});

	it('gets emptied on form submit', () => {
		wrapper.find('form').simulate('submit', {});
		wrapper.update();
		expect(wrapper.find('textarea').prop('value')).toEqual('');
	});
});
