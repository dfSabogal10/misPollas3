import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";
import {Projects} from "../../api/Projects.js";
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';



export default class Navbar extends Component {

votarPorProyecto(){
	Meteor.call('Projects.votarPorProyecto',this.props.project._id);
}
añadirAFavoritos(){
	Meteor.call('Projects.añadirAFavoritos',this.props.project._id);
}
	render() {


		return (
			<section>
			<nav className="navbar navbar-inverse">
  			<div className="container-fluid">
    			<div className="navbar-header">
			      <a className="navbar-brand" href="/">Mis Pollas</a>
    			</div>
    			<ul className="nav navbar-nav">
      		<li className="active"><Link to="/">Home</Link></li>
      		<li><Link to="/verPartidos">Ver Partidos</Link></li>
      		<li><Link to="/Pollas">Pollas</Link></li>
      		<li><Link to="/Invitaciones a pollas">Invitaciones a pollas</Link></li>
					<li><Link to="/Perfil">Perfil</Link></li>
				</ul>
  			</div>
			</nav>

		</section>
		);
	}
}



// Nav.propTypes = {
// 	project: PropTypes.object.isRequired
// }
