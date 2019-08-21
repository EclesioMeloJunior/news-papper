import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";
import Read from "./components/Read";
import Editor from "./components/Editor";

function App() {
	return (
		<Router>
			<Route path="/" exact component={Home} />
			<Route path="/news/:category" exact component={News} />
			<Route path="/read/:newsId" exact component={Read} />
			<Route path="/escrever" exact component={Editor} />
		</Router>
	);
}

export default App;
