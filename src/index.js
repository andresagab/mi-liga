import React from "react";
import {render} from "react-dom";
import {unregister} from "./serviceWorker";

//Components
import Header from "./components/Common/Header/Header";
import Router from "./Router";

//Styles
import "./index.css";

const Root = () => {

    return (
        <div>
            <Header/>
            <div className="contenedor">
                <Router/>
            </div>
        </div>
    );

}

render(<Root/>, document.querySelector('#root'));

unregister();
