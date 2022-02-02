import React from "react";
import ReactDOM from "react-dom"// allows us to use the dom 
import App from './App'
//global style sheet for this project
import './index.css'
// main app goes into render
//passing in our main app component into the react dom
//strict mode adds additonal checks and warnings information
ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode> ,   
document.getElementById('root'))