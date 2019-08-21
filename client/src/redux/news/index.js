import RichTextEditor from "react-rte";

const newsInitialValues = {
	formInitialValues: null
};

export const NEWS_TYPE = {
	FORM_INITIAL_VALUES: "FORM_INITIAL_VALUES"
};

const news = (state = newsInitialValues, action) => {
	switch (action.type) {
		case NEWS_TYPE.FORM_INITIAL_VALUES: {
			return {
				...state,
				formInitialValues: action.payload
			};
		}

		default:
			return state;
	}
};

export default news;
