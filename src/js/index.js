//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import '../styles/App.css';

//import your own components
import App from "./component/home.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<App/>);

