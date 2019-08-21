import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import agent from "../../agent";

const Categories = props => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		agent
			.get("news/categories")
			.then(categoriesResponse => categoriesResponse.data)
			.then(setCategories);
	}, []);

	return (
		<div className="nav-scroller py-1 mb-2">
			<nav className="nav d-flex justify-content-between">
				{categories.map((category, categoryIdx) => {
					return (
						<Link
							key={categoryIdx}
							className="p-2 text-muted"
							to={`/news/${category}`}
						>
							{category}
						</Link>
					);
				})}
			</nav>
		</div>
	);
};

export default Categories;
