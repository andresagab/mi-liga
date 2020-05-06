import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"

import Liga from "./components/Liga/Liga";
import Calendario from "./components/Calendario/Calendario";

const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Liga} />
                <Route path="/liga" component={Liga} />
                <Route path="/calendario" component={Calendario} />
            </Switch>
        </BrowserRouter>
    );

}

export default Router;
