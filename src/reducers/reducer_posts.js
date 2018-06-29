import _ from 'lodash';

import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
		case DELETE_POST:
			return _.omit(state, action.payload);
		case FETCH_POST:
			// ES5 Syntax
			// const post = action.payload.data;
			// const newState = { ...state };
			// newState[id] = post;
			// return newState;

			// ES6 Syntax
			return { ...state, [action.payload.data.id]: action.payload.data };
		case FETCH_POSTS:
			// console.log(action.payload.data); // [post1, post2, ...]
			return _.mapKeys(action.payload.data, "id");
		default:
			return state;
	}
}