import React from 'react';
import { Route, Link } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

export default () => {
	return (
		<div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Link to="/">Home</Link>
				<Link to="/post">Add Comment</Link>
			</div>
			<Route path="/" exact component={CommentList} />
			<Route path="/post" component={CommentBox} />
		</div>
	);
};
