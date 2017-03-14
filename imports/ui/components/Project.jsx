import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";

export default class Project extends Component {
	render() {
		if (!this.props.project) {
			return (<div>Loading!</div>);
		}

		return (
			<div>
				<div>{this.props.project.name}</div>
			</div>
		);
	}
}


Project.propTypes = {
	project: PropTypes.object.isRequired
}