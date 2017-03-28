import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";
import {Pollas} from "../../api/Pollas.js";


export default class Fixtures extends Component {

  apostar() {
		//Projects.insert(this.props.project._i, {
		//	$set: {"votes": (this.props.project.votes||0)+1},
		//});
    console.log(this.props.name);

	}


    render(){
      if (this.props.fixture.status ==="FINISHED")
      {
        return (

        <table className="fixes">
        <thead>
         <tr>
             <th>Local</th>
             <th>Visitante</th>
             <th>Fecha</th>
             <th>Jornada</th>
             <th></th>



         </tr>
        </thead>
        <tbody>
         <tr>
             <td>{this.props.fixture.homeTeamName}</td>
             <td>{this.props.fixture.awayTeamName}</td>
             <td>{this.props.fixture.date}</td>
             <td>{this.props.fixture.matchday}</td>

         </tr>

        </tbody>

        </table>
  );
      }
      else {

      return (
                <table className="fixes">
                <thead>
                 <tr>
                     <th>Local</th>
                     <th>Visitante</th>
                     <th>Fecha</th>
                     <th>Jornada</th>
                     <th>Goles Local</th>
                     <th>Goles Visitante</th>
                     <th> </th>

                 </tr>
             </thead>
             <tbody>
                 <tr>
                     <td>{this.props.fixture.homeTeamName}</td>
                     <td>{this.props.fixture.awayTeamName}</td>
                     <td>{this.props.fixture.date}</td>
                     <td>{this.props.fixture.matchday}</td>
                    <td> <input type="number" ref="visitante" /></td>
                    <td> <input type="number" ref="local" /></td>
  <td>
                     <button onClick={this.apostar.bind(this)}>Apostar</button>
  </td>
  <td>
                     <button onClick={this.apostar.bind(this)}>SHARE</button>
  </td>


                 </tr>

             </tbody>

          </table>
          );
        }










    }
  }
