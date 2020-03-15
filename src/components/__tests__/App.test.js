import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapper;

beforeEach(() => {
	wrapper = shallow(<App />);
});

it('shows a Comment Box Component', () => {
	expect(wrapper.find(CommentBox)).toHaveLength(1);
});

it('shows a Commont List Component', () => {
	expect(wrapper.find(CommentList)).toHaveLength(1);
});
