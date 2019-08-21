import React from "react";
import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import Footer from "../components/Footer";

const withTemplate = Component => props => (
	<React.Fragment>
		<div className="blog-article">
			<main>
				<Container>
					<Header />
					<Component {...props} />
				</Container>
			</main>
			<Footer />
		</div>
	</React.Fragment>
);

export default withTemplate;
