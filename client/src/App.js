import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";
import Read from "./components/Read";
import Editor from "./components/Editor";
import MyNews from "./components/News/MyNews";

import "react-quill/dist/quill.snow.css";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Route path="/" exact component={Home} />
				<Route path="/news/:category" exact component={News} />
				<Route path="/read/:newsId" exact component={Read} />
				<Route path="/escrever" exact component={Editor} />
				<Route path="/editar/:newsId" exact component={Editor} />
				<Route path="/my/news" exact component={MyNews} />
			</Router>
		</Provider>
	);
}

export default App;
