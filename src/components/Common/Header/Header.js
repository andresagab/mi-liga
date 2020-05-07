import React from "react";

//Material
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

//Style
import "./Header.css";

class Header extends React.Component {

    render() {
        return (
            <div>
                <div className="app-bar">
                    <AppBar position="static">
                        <Toolbar>
                            <div className="logo"></div>
                            <Typography variant="title" color="inherit" className="flex">
                            </Typography>
                            <Button color="inherit">
                                <a href="/liga">Equipos</a>
                            </Button>
                            <Button color="inherit">
                                <a href="/calendarios">Calendario</a>
                            </Button>
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
        );
    }

}

export default Header;
