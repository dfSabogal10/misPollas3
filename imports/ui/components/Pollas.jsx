import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";
import {createContainer} from "meteor/react-meteor-data";
import MiPolla from "./MiPolla.jsx";





export default class Pollas extends Component {

	constructor(props){
    super(props);
    this.state ={  };
  }



	componentWillMount () {
			var response = Meteor.call("Pollas.vermispollas",JSON.parse(localStorage.getItem("user") || "{}"),(err, res) =>{
			if (err) { console.log(err); }
			else {
			console.log("RESPUESTA:",res);
			this.setState({ mispollas: (res) });
			console.log("HOLA:",this.state.mispollas);
			}
			});
	}






      render(){



        return (


					<div className="col-md-8">

					<div>
						 {this.state&&this.state.mispollas&&this.state.mispollas.map(mipolla => {
											return <MiPolla mipolla={mipolla} key={mipolla.nombre} />
						})}
					</div>
				</div>



            );
          }

}
