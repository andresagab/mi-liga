import React from "react";

//Material
import Card, {CardHeader, CardContent} from "material-ui/Card";
import Typography from "material-ui/Typography";

//Styles
import "./Juego.css";

//Components
import Equipo from "./../Equipo/Equipo";

//Images
import Stadium from "./../../../assets/stadium.png";

class Juego extends React.Component{

    render() {
        return (
            <div className="juegos">
                {/* Local */}
                <Card className="card-game">
                    <CardHeader title="Local" align="center" variant="heading"/>
                    <div className="logo-score">
                        <Equipo nombre={this.props.localNombre} logo={this.props.localLogo}/>
                        <Typography color="primary" className="score-game">
                            {this.props.localAnotaciones}
                        </Typography>
                    </div>
                    <CardContent>
                        <Typography variant="title" component="h2" align="center" color="primary">
                            {this.props.localNombre}
                        </Typography>
                    </CardContent>
                </Card>
                {/* End Local */}

                <div className="info-game">
                    <img className="team-logo" src={Stadium} alt="Estadio"/>
                        <p>
                            {this.props.estadio} <br/>
                            {this.props.fecha} <br/>
                            {this.props.hora}
                        </p>
                </div>

                {/* Visitante */}
                <Card className="card-game">
                    <CardHeader title="Visitante" align="center" variant="heading"/>
                    <div className="logo-score">
                        <Typography color="primary" className="score-game">
                            {this.props.visitanteAnotaciones}
                        </Typography>
                        <Equipo nombre={this.props.visitanteNombre} logo={this.props.visitanteLogo}/>
                    </div>
                    <CardContent>
                        <Typography variant="title" component="h2" align="center" color="primary">
                            {this.props.visitanteNombre}
                        </Typography>
                    </CardContent>
                </Card>
                {/* End Visitante */}
            </div>
        );
    }

}

export default Juego;
