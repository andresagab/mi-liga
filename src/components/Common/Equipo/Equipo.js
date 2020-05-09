import React from "react";
//Material
import Icon from "material-ui/Icon";
//Styles
import "./Equipo.css";

class Equipo extends React.Component{

    state = {
        fav: {
            value: 'star'
        }
    }

    setFav (){
        //Respaldamos el estado existente
        const fav = {...this.state.fav};
        //Modificamos el valor
        fav.value = fav.value === 'star' ? 'star_selected' : 'star';
        //Recargarmos el estado
        this.setState({fav});
    }

    componentDidMount() {
        const localFav = localStorage.getItem(this.props.nombre);
        if (localFav)
            this.setState({
                fav: JSON.parse(localFav)
            });
    }

    componentDidUpdate() {
        //Guardamos el valor del estado que corresponde a un equipo
        localStorage.setItem(this.props.nombre, JSON.stringify(this.state.fav));
    }

    render() {
        return(
            <div>
                <img className="team-logo" src={this.props.logo} alt={this.props.nombre}/>
                <Icon className={this.state.fav.value} onClick={this.setFav.bind(this)}>star_rate</Icon>
            </div>
        );
    }

}

export default Equipo;
