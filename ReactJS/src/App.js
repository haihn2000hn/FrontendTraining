import React from 'react';
import "App.css";
import thumb from "./thumb1.jpg"

//import Components
import Nav from './Nav';

const App = () => (
    <div>
        <h1 class="color">Hello!!!!</h1>
        <img src={thumb} alt="" />
        <Nav/>
    </div>
);

export default App;