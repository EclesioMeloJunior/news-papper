import React from "react";
import Form from "react-bootstrap/Form";

export const ReduxFormControl = ({
	input,
	meta: { touched, error, warning },
	...props
}) => {
	return (
		<React.Fragment>
			<Form.Control {...props} {...input} isInvalid={touched && error} />
			{touched && error && (
				<Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
			)}
		</React.Fragment>
	);
};

export const ReduxCheckControl = ({ input, meta, ...props }) => {
	return <Form.Check {...props} {...input} />;
};
