	import React, {Component, PropTypes} from "react";
	import {Meteor} from "meteor/meteor";
	import {Projects} from "../../api/Projects.js"
	import { DateRange } from "react-date-range";
			var moment = require("moment");
			var datestart = new moment("2014-11-11");
			var dateend = new moment("2014-11-11");
	import Fixture from "./Fixtures.jsx";
	import {Pollas} from "../../api/Pollas.js";
import {createContainer} from "meteor/react-meteor-data";

	import {
		BrowserRouter as Router,
		Route,
		Link
	} from "react-router-dom";

	var name = " ";
	var money = " ";
	var users = " ";


	export default class FormNuevaPolla extends Component {
		constructor(props){
			super(props);

			this.state ={
				nombre:"",
				monto: 0,
				usuariosInvitados:""
	    };

			this.handleChange = this.handleChange.bind(this);


			};


		handleChange(event) {



		 this.setState({
			 	nombre:event.target.nombre,
			 	monto: event.target.monto,
			 	usuariosInvitados:event.target.usuariosInvitados
			 }
	);


	 }


		crearPolla(){

	var idPartido=this.props.match.params.idPartido;
	var pollas = new Object();
	pollas.idpartio = idPartido;
	pollas.idUsuario = JSON.parse(localStorage.getItem("user") || "{}");
	pollas.nombre = this.refs.nombre.value;
	pollas.monto = this.refs.monto.value;
	pollas.usuariosInvitar = this.refs.usuariosInvitar.value;
  pollas.homeTeamName = this.props.match.params.homeTeamName;
	pollas.awayTeamName = this.props.match.params.awayTeamName;




	 	 var jsonString= JSON.stringify(pollas);
		 console.log(jsonString);

	 	   var user = Meteor.call("Pollas.agregarPolla",jsonString);
	 	   console.log("siretorno:",user);


		}
		render() {


			return(
				<section>
				<h3>Crear Nueva Polla</h3>

				<br></br>
				<form>
				  <div className="form-group">
				    <label htmlFor="nombre">Nombre Polla</label>

						<input type="text" className="form-control"  ref="nombre" value={this.state.nombre} onChange={this.handleChange} />

				  </div>
				  <div className="form-group">
				    <label htmlFor="monto">Monto</label>
						<input type="number" className="form-control"  ref="monto" value={this.state.monto} onChange={this.handleChange} />

				  </div>
					<div className="form-group">
				    <label htmlFor="usuarios">UsuariosAInvitar</label>

						<input type="text" className="form-control"  ref="usuariosInvitar" value={this.state.usuariosInvitados} onChange={this.handleChange} />

				  </div>
				  <button type="submit" onClick={this.crearPolla.bind(this)} className="btn-primary"><Link to="/verPartidos">Crear</Link></button>
				</form>

				{/* <div className="container">
					<div className="row">
					<div className="col-md-4">
						<div className="col-xs-2 col-md-2">
						</div>
							<div className="col-xs-8 col-md-8 ">
								<DateRange onInit={this.handleSelect} onChange={this.handleSelect}/>
							</div>
						<div className="col-xs-2 col-md-2">
						</div>
						<div className="col-xs-6 col-md-3">
						</div>
							<div className="col-xs-6 col-md-6 middle-column ">
								<button onClick={this.getGames.bind(this)}  className="btn-primary">Ver Partidos</button>
							</div>
					</div>
				<div className="col-md-8">


						<div> {this.state&&this.state.fixtures&&this.state.fixtures.map(fixture => {
							return <Fixture fixture={fixture} key={fixture.homeTeamName} name={this.state.nombre}/>
																 })}
						</div>
				</div>
			</div>
			</div> */}
			</section>


			);
		}
	}
