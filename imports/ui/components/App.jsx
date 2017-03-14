import React, {Component} from "react";
import {Meteor} from "meteor/meteor";

import Project from "./Project.jsx";

export default class App extends Component {
	getProjects() {
		return [
			{name: "Project 1"},
			{name: "Project 2"},
			{name: "Project 3"},
			{name: "Project 4"},
		];
	}

	renderProjects() {
		return this.getProjects().map( (project) => {
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

