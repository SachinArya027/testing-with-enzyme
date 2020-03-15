import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment, fetchComments } from 'actions';

class CommentBox extends Component {
	state = { comment: '' };

	handleChange = event => {
		this.setState({ comment: event.target.value });
	};

	handleSubmit = event => {
		event.preventDefault();
		this.props.saveComment(this.state.comment);
		this.setState({ comment: '' });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div>
						<p>Please add a comment:</p>
						<textarea
							rows={4}
							value={this.state.comment}
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<button>Submit</button>
					</div>
				</form>
				<button className="fetch-comments" onClick={this.props.fetchComments}>
					Fetch Comments
				</button>
			</div>
		);
	}
}

export default connect(null, { saveComment, fetchComments })(CommentBox);
