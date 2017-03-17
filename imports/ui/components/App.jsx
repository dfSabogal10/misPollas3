import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";
import {createContainer} from "meteor/react-meteor-data";
import {Projects} from "../../api/Projects.js"
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

import Project from "./Project.jsx";


export class App extends Component {

	renderProjects() {
		return this.props.projects.map( (project) => {
			return <Project project= {project} > </Project>;
		});
	}

	renderTop() {
	return this.props.top.map( (project) => {
		return <Project project= {project} > </Project>;
	});
	}

	renderFavourites(){
	return this.props.favourites.map( (project) => {
		return <Project project= {project} > </Project>;
	});
	}
	render() {

		return(
			<div className="container">
				<AccountsUIWrapper />
				<h1>PeerGrader</h1>
				<div className="row">
					<div className="col-md-4">
				<h2>Projects:</h2>
				{this.renderProjects()}
			</div>
			<div className="col-md-4">
				<h2>Your favorites:</h2>
				<div>{this.renderFavourites()}</div>
			</div>
			<div className="col-md-4">
				<h2>Overall most voted</h2>
				<div>{this.renderTop()}</div>
			</div>
		</div>

			</div>
			);
	}
}


App.propTypes = {
	projects : PropTypes.array.isRequired
}


export default AppContainer = createContainer(()=>{
	Meteor.subscribe('projects');

	return {
		projects: Projects.find({}).fetch(),
		top: Projects.find({}, {sort: {votes: -1}, limit:10}).fetch(),
		favourites: Projects.find({ FavouriteUsers: Meteor.userId() }),
	};
}, App);
