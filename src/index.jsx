import React from "react";
import ReactDOM from "react-dom/client";  // Note the change to `react-dom/client`
import { App } from "./App";
import './index.css'; // Make sure your CSS is included

// Create a root and render your app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);