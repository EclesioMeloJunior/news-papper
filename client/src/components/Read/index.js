import React from "react";
import withTemplate from "../../containers/withTemplate";

const Read = () => {
	return (
		<React.Fragment>
			<div className="blog-main">
				<div className="blog-post">
					<h2 className="blog-post-title">Sample blog post</h2>
					<p className="blog-post-meta">
						January 1, 2014 by <a href="#">Mark</a>
					</p>

					<p>
						This blog post shows a few different types of content that’s
						supported and styled with Bootstrap. Basic typography, images, and
						code are all supported.
					</p>

					<hr />

					<p>
						Cum sociis natoque penatibus et magnis{" "}
						<a href="#">dis parturient montes</a>, nascetur ridiculus mus.
						Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
						vestibulum. Sed posuere consectetur est at lobortis. Cras mattis
						consectetur purus sit amet fermentum.
					</p>
				</div>
			</div>
		</React.Fragment>
	);
};

export default withTemplate(Read);
