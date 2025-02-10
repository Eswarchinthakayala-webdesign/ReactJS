# Shopping List Component

## 📌 Overview
The `ShoppingList` component is a simple React app that allows users to add items with their quantities to a shopping list. It utilizes `useState` to manage the list dynamically.

## 🚀 Features
- **Controlled Inputs**: Ensures input fields remain in sync with state.
- **Dynamic List Updates**: Items are added and displayed in real-time.
- **Data Persistence (Optional)**: Can be extended to store data in local storage.

## 📂 File Structure
```
/project-root
│── src/
│   ├── components/
│   │   ├── ShoppingList.js
│   ├── App.js
│   ├── index.js
│── public/
│── README.md
```


## 📝 Code Explanation
```jsx
import { useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity) return;
    const newItem = {
      name,
      quantity: parseInt(quantity),
    };
    setItems([...items, newItem]);
    setName("");
    setQuantity("");
  };

  return (
    <div>
      <h1>Shopping Mart</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter the Item"
        />
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Enter the Quantity"
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map((i, index) => (
          <li key={index}>Item: {i.name} - Quantity: {i.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
```

## 📊 Flow Diagram
```
ShoppingList Component
 ├── useState([]) → Initializes state for items
 ├── Render UI
 │    ├── Input fields for item name & quantity
 │    ├── Add button & List display
 │
 ├── Event: User Submits Form
 │    ├── handleSubmit extracts name & quantity
 │    ├── Updates items state → Triggers re-render
 │
 ├── UI Updates with New Items
 │
 ├── (Optional) localStorage Integration
      ├── useEffect → Saves items to localStorage on change
      ├── useState loads stored items on mount
```

## 📜 License
This project is licensed under the MIT License.
