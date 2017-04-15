import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";
import {Pollas} from "../../api/Pollas.js";
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';


export default class Fixtures extends Component {

  crearPolla() {


  //  var pollas = new Object();
  // pollas.name = this.props.name;
  // pollas.visitante  = this.refs.visitante.value;
  // pollas.local = this.refs.local.value;
  // var jsonString= JSON.stringify(pollas);
  // console.log(pollas);
  //
  //   var user = Meteor.call('Pollas.agregarPolla',jsonString);
  //   console.log('siretorno:',user);

	}


    render(){
      console.log(this.props.fixture._links.self.href);
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
  //               <table className="fixes">
  //               <thead>
  //                <tr>
  //                    <th>Local</th>
  //                    <th>Visitante</th>
  //                    <th>Fecha</th>
  //                    <th>Jornada</th>
  //                    <th>Goles Local</th>
  //                    <th>Goles Visitante</th>
  //                    <th> </th>
  //
  //                </tr>
  //            </thead>
  //            <tbody>
  //                <tr>
  //                    <td>{this.props.fixture.homeTeamName}</td>
  //                    <td>{this.props.fixture.awayTeamName}</td>
  //                    <td>{this.props.fixture.date}</td>
  //                    <td>{this.props.fixture.matchday}</td>
  //                   <td> <input type="number" ref="visitante" /></td>
  //                   <td> <input type="number" ref="local" /></td>
  // <td>
  //                    <button onClick={this.apostar.bind(this)}>Apostar</button>
  // </td>
  // <td>
  //                    <button onClick={this.apostar.bind(this)}>SHARE</button>
  // </td>
  //
  //
  //                </tr>
  //
  //            </tbody>
  //
  //         </table>
    <div className="container">
      <div className="row">
      <div className="row">
        {/* <div className="col-md-3 local-column">
        </div> */}
        <div className="col-md-3 middle-column">
          {this.props.fixture.date.split("T")[0] + '\t'+"-"+'\t'+this.props.fixture.date.split("T")[1].substring(0,5)}
        </div>
        {/* <div className="col-md-3">
        </div> */}
      </div>
      <div className="row">
        <div className="col-md-3 local-column">
          <h4>Local</h4>
        </div>
        <div className="col-md-2 middle-column">
        </div>
        <div className="col-sm-3">
          <h4>Visitante</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 local-column">
          <h5>{this.props.fixture.homeTeamName}</h5>
        </div>
        <div className="col-md-2 middle-column">
          <h5>vs</h5>
        </div>
        <div className="col-md-3">
          <h5>{this.props.fixture.awayTeamName}</h5>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-md-3 local-column">
          <input type="number" ref="local" />
        </div>
        <div className="col-md-2 middle-column">
          <h5>-</h5>
        </div>
        <div className="col-md-3">
          <input type="number" ref="visitante" />
        </div>
      </div> */}
      <div className="row">
        <div className="col-md-3 local-column">
        </div>
        <div className="col-md-2 middle-column">
          <button className="btn-primary" onClick={this.crearPolla.bind(this)}><Link to={"/FormNuevaPolla/"+this.props.fixture._links.self.href.split("/")[5]} >Crear Polla</Link></button>
        </div>
      </div>
      <div className="row">
        <br></br><br></br>
      </div>

    </div>
  </div>
          );
        }










    }
  }
