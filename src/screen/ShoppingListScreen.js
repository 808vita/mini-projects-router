import React, { useState } from "react";
import "./ShoppingListScreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronRight,
	faChevronLeft,
	faCircle,
	faCheckCircle,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";

const ShoppingListScreen = () => {
	// HINT: each "item" in our list names a name, a boolean to tell if its been completed, and a quantity
	const [items, setItems] = useState([
		{ itemName: "item 1", quantity: 1, isSelected: false },
		{ itemName: "item 2", quantity: 3, isSelected: true },
		{ itemName: "item 3", quantity: 2, isSelected: false },
	]);

	const [inputValue, setInputValue] = useState("");
	const [totalItemCount, setTotalItemCount] = useState(6);

	const handleAddButtonClick = () => {
		const newItem = {
			itemName: inputValue,
			quantity: 1,
			isSelected: false,
		};

		const newItems = [...items, newItem];
		setItems(newItems);
		setTotalItemCount(totalItemCount + newItem.quantity);
		setInputValue("");
	};

	const handleQuantityIncrease = (index) => {
		const newItems = [...items];
		newItems[index].quantity++;
		setItems(newItems);
		calculateTotal();
	};

	const handleQuantityDecrease = (index) => {
		const newItems = [...items];
		newItems[index].quantity--;
		setItems(newItems);
		calculateTotal();
	};

	const toggleComplete = (index) => {
		const newItems = [...items];
		newItems[index].isSelected = !newItems[index].isSelected;
		setItems(newItems);
	};

	const calculateTotal = () => {
		const totalItemCount = items.reduce((total, item) => {
			return total + item.quantity;
		}, 0);
		setTotalItemCount(totalItemCount);
	};

	return (
		<div className="app-background">
			<div className="main-container">
				<div className="add-item-box">
					<input
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						className="add-item-input"
						placeholder="Add an item..."
					/>
					<FontAwesomeIcon icon={faPlus} onClick={handleAddButtonClick} />
				</div>
				<div className="item-list">
					{items.map((item, index) => (
						<div key={index + item.itemName} className="item-container">
							<div className="item-name" onClick={() => toggleComplete(index)}>
								{/* HINT: replace false with a boolean indicating the item has been completed or not */}
								{item.isSelected ? (
									<>
										<FontAwesomeIcon icon={faCheckCircle} />
										<span className="completed">{item.itemName}</span>
									</>
								) : (
									<>
										<FontAwesomeIcon icon={faCircle} />
										<span>{item.itemName}</span>
									</>
								)}
							</div>
							<div className="quantity">
								<button>
									<FontAwesomeIcon
										icon={faChevronLeft}
										onClick={() => handleQuantityDecrease(index)}
									/>
								</button>
								<span> {item.quantity} </span>
								<button>
									<FontAwesomeIcon
										icon={faChevronRight}
										onClick={() => handleQuantityIncrease(index)}
									/>
								</button>
							</div>
						</div>
					))}
				</div>
				<div className="total">Total: {totalItemCount}</div>
			</div>
		</div>
	);
};

export default ShoppingListScreen;
