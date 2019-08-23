import React, { useEffect, useState } from "react";
import Authentication from "../components/Authentication";
import firebase from "../firebase";

const withAuthentication = Component => props => {
	const [user, setUser] = useState(null);

	const handleAuthChanged = user => {
		localStorage.setItem("authUser", JSON.stringify(user));
		setUser(user);
	};

	useEffect(() => {
		const unregisterAuthObserver = firebase
			.auth()
			.onAuthStateChanged(handleAuthChanged);

		return () => unregisterAuthObserver();
	});

	return user ? <Component {...props} user={user} /> : <Authentication />;
};

export default withAuthentication;
