import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import agent from "../../agent";

import { usePromise } from "bananahooks";

const fetchCategories = async () => {
	const categoriesResponse = await agent.get("news/categories");
	return categoriesResponse.data;
};

const Categories = () => {
	const [categories] = usePromise(fetchCategories, []);

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
