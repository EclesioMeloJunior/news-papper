import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
import Button from "react-bootstrap/Button";

const AuthNavbar = props => (
	<React.Fragment>
		<header className="blog-header py-3">
			<div className="row flex-nowrap justify-content-between align-items-center">
				<div className="col-4 pt-1">
					<a className="text-muted" href="#">
						Subscribe
					</a>
				</div>
				<div className="col-4 text-center">
					<Link className="blog-header-logo text-dark" to="/">
						News Papper
					</Link>
				</div>
				<div className="col-4 d-flex justify-content-end align-items-center">
					<a className="text-muted" href="#">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="mx-3"
							role="img"
							viewBox="0 0 24 24"
							focusable="false"
						>
							<title>Search</title>
							<circle cx="10.5" cy="10.5" r="7.5" />
							<path d="M21 21l-5.2-5.2" />
						</svg>
					</a>
					<Link className="btn btn-sm btn-outline-primary mr-2" to="/my/news">
						{props.user.displayName}
					</Link>
					<Link className="btn btn-sm btn-outline-primary mr-2" to="/escrever">
						Escrever
					</Link>
					<Button
						variant="outline-danger"
						size="sm"
						onClick={() => {
							firebase.auth().signOut();
						}}
					>
						Sair
					</Button>
				</div>
			</div>
		</header>
	</React.Fragment>
);

const NotAuthNavbar = () => (
	<React.Fragment>
		<header className="blog-header py-3">
			<div className="row flex-nowrap justify-content-between align-items-center">
				<div className="col-4 pt-1">
					<a className="text-muted" href="#">
						Subscribe
					</a>
				</div>
				<div className="col-4 text-center">
					<Link className="blog-header-logo text-dark" to="/">
						News Papper
					</Link>
				</div>
				<div className="col-4 d-flex justify-content-end align-items-center">
					<a className="text-muted" href="#">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="mx-3"
							role="img"
							viewBox="0 0 24 24"
							focusable="false"
						>
							<title>Search</title>
							<circle cx="10.5" cy="10.5" r="7.5" />
							<path d="M21 21l-5.2-5.2" />
						</svg>
					</a>

					<Link className="btn btn-sm btn-outline-secondary" to="/login">
						Sign up
					</Link>
				</div>
			</div>
		</header>
	</React.Fragment>
);

const Navbar = () => {
	const [user, setUser] = useState(null);

	const handleAuthChanged = user => {
		setUser(user);
	};

	useEffect(() => {
		const unregisterAuthObserver = firebase
			.auth()
			.onAuthStateChanged(handleAuthChanged);

		return () => unregisterAuthObserver();
	}, []);

	return user ? <AuthNavbar user={user} /> : <NotAuthNavbar />;
};

export default Navbar;
