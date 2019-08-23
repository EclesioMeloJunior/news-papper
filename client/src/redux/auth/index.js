export const authTypes = {
	CURRENT_USER: "@auth/CURRENT_USER"
};

const authInitialState = {
	user: null
};

const auth = (state = authInitialState, action) => {
	switch (action.type) {
		case authTypes.CURRENT_USER: {
			return { ...state, user: action.payload };
		}

		default:
			return state;
	}
};

export default auth;
