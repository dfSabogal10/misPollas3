import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";
import {createContainer} from "meteor/react-meteor-data";

import Project from "./Project.jsx";


export class App extends Component {

	renderProjects() {
		return this.props.projects.map( (project) => {
			return <Project key= {project.name} project={project}> </Project>;
		});
	}

	render() {
		return(
			<div>
				<h1>PeerGrader</h1>
				<h2>Projects:</h2>
				{this.renderProjects()}
				<h2>Your favorites:</h2>
				<div>Your faves</div>
				<h2>Overall most voted</h2>
				<div>Most voted</div>
			</div>
			);
	}
}


App.propTypes = {
	projects : PropTypes.array.isRequired
}


export default AppContainer = createContainer(()=>{
	return {
		projects:[
			{name: "Project 1"},
			{name: "Project 2"},
			{name: "Project 3"},
			{name: "Project 4"},
			{name: "Project 5"},
			{name: "Project 6"},
		]
	};
}, App);