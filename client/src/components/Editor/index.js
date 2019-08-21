import React from "react";
import withTemplate from "../../containers/withTemplate";
import EditorReader from "./EditorHeader";
import EditorForm from "./EditorForm";

const Editor = () => {
	return (
		<React.Fragment>
			<EditorReader />
			<EditorForm />
		</React.Fragment>
	);
};

export default withTemplate(Editor);
