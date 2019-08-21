import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Categories from "./components/Categories";
import TopNews from "./components/TopNews";

function App() {
	return (
		<React.Fragment>
			<Container>
				<Header />
				<Categories />
				<TopNews />
			</Container>
		</React.Fragment>
	);
}

export default App;
