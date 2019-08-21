import React from "react";
import Categories from "../Categories";
import { Link } from "react-router-dom";

const Header = props => (
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
					<Link className="btn btn-sm btn-outline-primary mr-2" to="/escrever">
						Escrever
					</Link>
					<a className="btn btn-sm btn-outline-secondary" href="#">
						Sign up
					</a>
				</div>
			</div>
		</header>

		<Categories />
	</React.Fragment>
);

export default Header;
