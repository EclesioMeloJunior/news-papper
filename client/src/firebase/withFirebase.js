import React from "react";
import firebase from "./index";

const withFirebase = Component => props => (
	<Component {...props} firebase={firebase} />
);

export default withFirebase;
