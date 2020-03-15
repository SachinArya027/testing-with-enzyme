import React from 'react';
import { mount } from 'enzyme';

import Root from 'components/Root';
import CommentList from 'components/CommentList';

const initialState = {
	comments: ['comment# 1', 'comment# 2']
};

let wrapper;

beforeEach(() => {
	wrapper = mount(
		<Root initialState={initialState}>
			<CommentList />
		</Root>
	);
});

afterEach(() => {
	wrapper.unmount();
});

it('shows an li for each comment', () => {
	expect(wrapper.find('li')).toHaveLength(2);
});

it('shows the correct text for comment', () => {
	expect(wrapper.render().text()).toContain('comment# 1');
	expect(wrapper.render().text()).toContain('comment# 2');
});
