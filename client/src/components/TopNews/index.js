import React from "react";

const TopNews = props => (
	<React.Fragment>
		<div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
			<div className="col-md-6 px-0">
				<h1 className="display-4 font-italic">
					Title of a longer featured blog post
				</h1>
				<p className="lead my-3">
					Multiple lines of text that form the lede, informing new readers
					quickly and efficiently about what’s most interesting in this post’s
					contents.
				</p>
				<p className="lead mb-0">
					<a href="#" className="text-white font-weight-bold">
						Continue reading...
					</a>
				</p>
			</div>
		</div>
		<div className="row mb-2">
			<div className="col-md-6">
				<div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
					<div className="col p-4 d-flex flex-column position-static">
						<strong className="d-inline-block mb-2 text-primary">World</strong>
						<h3 className="mb-0">Featured post</h3>
						<div className="mb-1 text-muted">Nov 12</div>
						<p className="card-text mb-auto">
							This is a wider card with supporting text below as a natural
							lead-in to additional content.
						</p>
						<a href="#" className="stretched-link">
							Continue reading
						</a>
					</div>
					<div className="col-auto d-none d-lg-block">
						<img src="https://place-hold.it/200x250" />
					</div>
				</div>
			</div>
			<div className="col-md-6">
				<div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
					<div className="col p-4 d-flex flex-column position-static">
						<strong className="d-inline-block mb-2 text-success">Design</strong>
						<h3 className="mb-0">Post title</h3>
						<div className="mb-1 text-muted">Nov 11</div>
						<p className="mb-auto">
							This is a wider card with supporting text below as a natural
							lead-in to additional content.
						</p>
						<a href="#" className="stretched-link">
							Continue reading
						</a>
					</div>
					<div className="col-auto d-none d-lg-block">
						<img src="https://place-hold.it/200x250" width="200" />
					</div>
				</div>
			</div>
		</div>
	</React.Fragment>
);

export default TopNews;
