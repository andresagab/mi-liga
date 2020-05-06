import React from "react";

//Styles
import "./Calendario.css";

//Components
import Juego from "../Common/Juego/Juego";

//Images
import LogoFelinos from "./../../assets/logos/felinos.png";
import LogoPiratas from "./../../assets/logos/piratas.png";
import LogoTiburones from "./../../assets/logos/tiburones.png";

class Calendario extends React.Component{

    render() {
        return (
            <div className="calendarios">
                <Juego
                    localNombre="Felinos"
                    localLogo={LogoFelinos}
                    localAnotaciones="2"
                    visitanteNombre="Piratas"
                    visitanteLogo={LogoPiratas}
                    visitanteAnotaciones="1"
                    estadio="Estadio Olímpico"
                    fecha="20-Abril-2018"
                    hora="20:00"/>
                <Juego
                    localNombre="Piratas"
                    localLogo={LogoPiratas}
                    localAnotaciones="2"
                    visitanteNombre="Tiburones"
                    visitanteLogo={LogoTiburones}
                    visitanteAnotaciones="2"
                    estadio="Estadio Universitario"
                    fecha="24-Abril-2018"
                    hora="19:00"/>
                <Juego
                    localNombre="Tiburones"
                    localLogo={LogoTiburones}
                    localAnotaciones="1"
                    visitanteNombre="Felinos"
                    visitanteLogo={LogoFelinos}
                    visitanteAnotaciones="4"
                    estadio="Estadio de la ciudad"
                    fecha="26-Abril-2018"
                    hora="21:00"/>
            </div>
        );
    }

}

export default Calendario;
