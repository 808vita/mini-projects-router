import React from "react";

const HomeScreen = () => {
	return (
		<div className="p-4 ">
			<h1>Welcome Home!</h1>
			<div>
				<p>
					This is the HomeScreen of this project! <br />
					This project routes to multiple "Mini Projects" using React Router.
				</p>
			</div>
			<h4>Mini Projects:</h4>
			<div className="d-flex">
				<ul>
					<li>
						<strong>Shopping List</strong> - A simple shopping list app with
						features for adding items , deleting items , marking as completed ,
						dedicated item counters and total items counter .
						<br /> Uses React hooks for features.
					</li>
					<li>
						<strong>Todo List</strong> - Todo list app with features for adding
						items , deleting items, marking as completed and total items counter
						.
						<br /> Uses Redux for complete state management.
					</li>
				</ul>
			</div>
		</div>
	);
};

export default HomeScreen;
