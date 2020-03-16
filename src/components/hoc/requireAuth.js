import React, { Component } from 'react';
import { connect } from 'react-redux';

export default WrappedComponent => {
	class EnhancedComponent extends Component {
		componentDidMount() {
			this.shouldNavigateAway();
		}

		componentDidUpdate() {
			this.shouldNavigateAway();
		}

		shouldNavigateAway() {
			if (!this.props.auth) {
				this.props.history.push('/');
			}
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	}

	function mapStateToProps({ auth }) {
		return { auth };
	}

	return connect(mapStateToProps)(EnhancedComponent);
};
