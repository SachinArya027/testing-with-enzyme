export default ({ dispatch }) => next => action => {
	const { payload } = action;
	if (payload instanceof Promise) {
		return payload.then(res => dispatch({ ...action, payload: res }));
	}
	return next(action);
};
