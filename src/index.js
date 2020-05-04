import React from "react";
import {render} from "react-dom";
import {unregister} from "./serviceWorker";
import HolaMundo from "./components/HolaMundo/HolaMundo";


import "./index.css";

render(<HolaMundo name="Andres" edad="21" tipo="note"/>, document.querySelector('#root'));

unregister();
