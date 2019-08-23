import React from "react";
import FirebaseAuth from "react-firebaseui/FirebaseAuth";
import firebase from "../../firebase";
import withTemplate from "../../containers/withTemplate";

const Authentication = props => {
	const uiConfig = {
		signInFlow: "popup",
		signInOptions: [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.EmailAuthProvider.PROVIDER_ID
		],
		signInSuccessUrl: "/my/news"
	};

	return <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />;
};

export default withTemplate(Authentication);
