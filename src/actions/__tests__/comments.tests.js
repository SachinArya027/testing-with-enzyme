import { SAVE_COMMENT } from 'actions/types';
import { saveComment } from 'actions/comments';

describe('saveComment', () => {
	let action;

	beforeEach(() => {
		action = saveComment('new comment');
	});

	it('it has the correct type', () => {
		expect(action.type).toEqual(SAVE_COMMENT);
	});

	it('it has the correct payload', () => {
		expect(action.payload).toEqual('new comment');
	});
});
