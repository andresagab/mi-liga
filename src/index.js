import React from "react";
import {render} from "react-dom";

class HolaMundo extends React.Component{
    render() {
        return (
            <div>
                Hola mundo
            </div>
        );
    }
}

render(<HolaMundo/>, document.querySelector('#root'));
