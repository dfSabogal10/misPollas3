import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";
import {Projects} from "../../api/Projects.js"
import { DateRange } from 'react-date-range';
		var moment = require('moment');
		var datestart = new moment('2014-11-11');
		var dateend = new moment('2014-11-11');
import Fixture from "./Fixtures.jsx"



export default class Partidos extends Component {
	constructor(props){
		super(props);
		};

	onChange(state) {
		this.setState(state);
	}
	handleSelect(date){
		datestart = new moment(date.startDate);
		dateend = new moment(date.endDate);
	}


		getGames() {
		var diasdiferencia =dateend.diff(datestart, 'days');

		var month= datestart.format('MM');
		var day =datestart.format('DD');
		var year =datestart.format('YYYY');
		var month2= dateend.format('MM');
		var day2= dateend.format('DD');
		var year2 =dateend.format('YYYY');
		console.log(diasdiferencia);
		if(diasdiferencia> 20)
		{
			alert("El maximo rango de fechas permitido es de 21 dias");
		}
		else {
	console.log("Query time");
	 Meteor.call('getGame',
																	 day: day,
																	 month:month,
																	 year:year,
																	 day2: day2,
																	 month2:month2,
																	 year2:year2,

																	(err, res) =>{
																		if (err) { console.log(err); }
	else {
		console.log("made it!");
		console.log(res.data.fixtures);
		this.setState({fixtures: res.data.fixtures});

	}

																	});
																}
	}
	render() {


		return(
			<section>
			<h3>Selecciona un rango de fechas para ver partidos</h3>

			<br></br>


			<div className="container">
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
		</div>
		</section>


		);
	}
}
