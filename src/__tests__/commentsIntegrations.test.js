import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'components/Root';
import App from 'components/App';

beforeEach(() => {
	moxios.install();

	moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
		status: 200,
		response: [{ name: 'comment 1' }, { name: 'comment 2' }]
	});
});

afterEach(() => {
	moxios.uninstall();
});

it('fetch a list of comments and show them', done => {
	const wrapper = mount(
		<Root>
			<App />
		</Root>
	);

	wrapper.find('.fetch-comments').simulate('click');

	moxios.wait(() => {
		wrapper.update();
		expect(wrapper.find('li')).toHaveLength(2);
		done();
		wrapper.unmount();
	});
});
