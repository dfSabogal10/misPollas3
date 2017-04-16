import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";
import {Pollas} from "../../api/Pollas.js";

import {
	BrowserRouter as Router,
	Route,
	Link
} from "react-router-dom";


export default class MiPolla extends Component {


  apostar() {
  var pollas = new Object();
   pollas.name = this.props.mipolla.nombre;
   pollas.visitante  = this.refs.visitante.value;
   pollas.local = this.refs.local.value;
   var jsonString= JSON.stringify(pollas);
   console.log(jsonString);
   var user = Meteor.call("Pollas.apostar",jsonString);
   console.log("siretorno:",user);
   console.log("Resultado:",jsonString);

 	}


//MKKKKK DOS OPCIONES, 1 ya puso un marcador 2 no ha puesto nada
    render(){
      if(this.props.mipolla.apostado ===true)
{

      console.log("PROPS",this.props);
      return (
                <table className="fixes">
                <thead>
                 <tr>
                     <th>Nombre</th>
                     <th>Monto</th>
                     <th>Usuarios Invitados</th>
                     <th>Equipo Local</th>
                     <th>Equipo Visitante</th>
                     <th>Goles Local</th>
                     <th>Goles Visitante</th>
                 </tr>
             </thead>
             <tbody>
                 <tr>
                     <td>{this.props.mipolla.nombre} </td>
                     <td>{this.props.mipolla.monto} </td>
                     <td>{this.props.mipolla.usuarioInvita} </td>
                     <td>{this.props.mipolla.local} </td>
                     <td>{this.props.mipolla.visitante} </td>
                     <td>{this.props.mipolla.marcadorLocal} </td>
                     <td>{this.props.mipolla.marcadorVisitante} </td>
                 </tr>
             </tbody>
          </table>
          );



        }

        else
    {

          console.log("PROPS",this.props);
          return (
                    <table className="fixes">
                    <thead>
                     <tr>
                         <th>Nombre</th>
                         <th>Monto</th>
                         <th>Usuarios Invitados</th>
                         <th>Equipo Local</th>
                         <th>Equipo Visitante</th>
                         <th>Goles Local</th>
                         <th>Goles Visitante</th>
                         <th> </th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr>
                         <td>{this.props.mipolla.nombre} </td>
                         <td>{this.props.mipolla.monto} </td>
                         <td>{this.props.mipolla.usuarioInvita} </td>
                         <td>{this.props.mipolla.local} </td>
                         <td>{this.props.mipolla.visitante} </td>
                         <td> <input type="number" ref="visitante" /></td>
                         <td> <input type="number" ref="local" /></td>
                         <button onClick={this.apostar.bind(this)}>Apostar</button>
                     </tr>
                 </tbody>
              </table>
              );



            }




        }










    }
