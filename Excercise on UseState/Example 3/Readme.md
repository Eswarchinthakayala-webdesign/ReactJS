# Profile Component

## 📌 Overview
The `Profile` component is a simple React form that allows users to input and update their name and age. It utilizes `useState` to manage form state and dynamically updates the UI as the user types.

## 🚀 Features
- **Controlled Inputs**: Ensures form fields are always in sync with state.
- **Dynamic State Updates**: Updates the profile information in real-time.
- **Local Storage Persistence (Optional)**: Saves data across page reloads.

## 📂 File Structure
```
/project-root
│── src/
│   ├── components/
│   │   ├── Profile.js
│   ├── App.js
│   ├── index.js
│── public/
│── README.md
```


## 📝 Code Explanation
```jsx
import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div>
      <h2>Profile</h2>
      <div>
        <label>
          Name:
          <input type="text" name="name" value={profile.name} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input type="number" name="age" value={profile.age} onChange={handleChange} />
        </label>
      </div>
      <h3>Profile Information</h3>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
};

export default Profile;
```

## 📊 Flow Diagram
```
Profile Component
 ├── useState({ name: "", age: "" })  → Initializes state
 ├── Render UI
 │    ├── Input fields for Name & Age
 │    ├── Display profile information
 │
 ├── Event: User Types in Input
 │    ├── handleChange extracts {name, value}
 │    ├── Updates profile state → Triggers re-render
 │
 ├── UI Updates with New Profile Information
 │
 ├── (Optional) localStorage Integration
      ├── useEffect → Saves profile to localStorage on change
      ├── useState loads stored profile on mount
```

## 📜 License
This project is licensed under the MIT License.
