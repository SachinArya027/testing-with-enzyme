import React from 'react';
import { Route, Link } from 'react-router-dom';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { connect } from 'react-redux';
import { changeAuth } from 'actions';

class App extends React.Component {
	renderButton() {
		const { changeAuth, auth } = this.props;
		const authText = this.props.auth ? 'Sign Out' : 'Sign In';
		return <button onClick={() => changeAuth(!auth)}>{authText}</button>;
	}

	renderHeader() {
		return (
			<div className="header">
				<Link to="/">Home</Link>
				<Link to="/post">Add Comment</Link>
				{this.renderButton()}
			</div>
		);
	}

	render() {
		return (
			<div>
				{this.renderHeader()}
				<Route path="/" exact component={CommentList} />
				<Route path="/post" component={CommentBox} />
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps, { changeAuth })(App);
