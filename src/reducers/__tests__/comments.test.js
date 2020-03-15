import { SAVE_COMMENT } from 'actions/types';
import commentsReducer from 'reducers/comments';

it('handles the unknown type actions', () => {
	const newState = commentsReducer([], {});
	expect(newState).toEqual([]);
});

it('handles action of type SAVE_COMMENT ', () => {
	const action = {
		type: SAVE_COMMENT,
		payload: 'new comment'
	};

	const newState = commentsReducer([], action);

	expect(newState).toEqual(['new comment']);
});
