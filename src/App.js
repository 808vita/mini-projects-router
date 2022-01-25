import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import ShoppingListScreen from "./screen/ShoppingListScreen";
import TodoScreen from "./screen/TodoScreen";
import store from "./screen/redux/store";
import { Provider } from "react-redux";

const App = () => {
	return (
		<Router>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link className="p-2" to="/">
					Home?
				</Link>
				<Link className="p-2" to="/shoppingList">
					Shopping List
				</Link>
				<Link className="p-2" to="/todo">
					Todo List
				</Link>
			</nav>
			<Routes>
				<Route path="/shoppingList" element={<ShoppingListScreen />} />

				<Route
					path="/todo"
					element={
						<Provider store={store}>
							<TodoScreen />
						</Provider>
					}
				/>

				<Route exact path="/" element={<HomeScreen />} />
			</Routes>
		</Router>
	);
};

export default App;
