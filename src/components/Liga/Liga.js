import React from "react";
import {Link} from "react-router-dom";

//Material
import Button from "material-ui/Button";

//Styles
import "./Liga.css";

//Components
import Equipo from "../Common/Equipo/Equipo";
import Jugador from "../Common/Jugador/Jugador";

//Data
import teamsJSON from "./../../assets/data/equipos.json";

class Liga extends React.Component{

    state = {
        teams: [],
        players: []
    }

    async componentDidMount() {
        let teams = {...this.state.teams};
        teams = teamsJSON;
        this.setState({teams});

        //Carga de jugadores desde una API
        try {
            let res = await fetch('https://api-mi-liga.now.sh/api/jugadores');
            let dataAPI = await res.json();
            this.setState({players: dataAPI});
        } catch (e) {

        }
    }

    fileExist(path) {
        try {
            if (__filename.accessSync(path)) return true;
        } catch (e) {
            return false;
        }
    }

    render() {
        return (
            <div className="contenedor">
                <div className="lista-equipos">
                    {
                        this.state.teams.map((object, index) => {
                            return (
                                <Equipo
                                    key={index}
                                    nombre={object.nombre}
                                    logo={require('./../../assets/logos/' + object.logo)}
                                />
                            )
                        })
                    }
                </div>
                <Button variant="raised" component={Link} to="/calendario/Felinos" color="secondary">Ir al calendario</Button>
                <div className="lista-jugadores">
                    {
                        this.state.players.map((jugador, index) => {
                            let playerPhoto = require('./../../assets/fotos/paco.png');
                            if (this.fileExist('./../../assets/fotos/' + jugador.foto)) playerPhoto = require('./../../assets/fotos/' + jugador.foto);
                            return (
                                <Jugador
                                    key={index}
                                    nombre={jugador.nombre}
                                    foto={playerPhoto}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }

}

export default Liga;
