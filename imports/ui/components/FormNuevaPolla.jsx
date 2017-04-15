import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";
import {Projects} from "../../api/Projects.js"
import { DateRange } from 'react-date-range';
		var moment = require('moment');
		var datestart = new moment('2014-11-11');
		var dateend = new moment('2014-11-11');
import Fixture from "./Fixtures.jsx";
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';



export default class FormNuevaPolla extends Component {
	constructor(props){
		super(props);
		};


	crearPolla(){
		var idPartido=this.props.match.params.idPartido;
	}
	render() {

		console.log(this.props.match.params.idPartido);

		return(
			<section>
			<h3>Crear Nueva Polla</h3>

			<br></br>
			<form>
			  <div className="form-group">
			    <label htmlFor="nombre">Nombre Polla</label>
			    <input type="text" className="form-control" id="nombre"/>
			  </div>
			  <div className="form-group">
			    <label htmlFor="monto">Monto</label>
			    <input type="number" className="form-control" id="monto"/>
			  </div>
				<div className="form-group">
			    <label htmlFor="usuarios">UsuariosAInvitar</label>
			    <input type="text" className="form-control" id="usuarios"/>
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
