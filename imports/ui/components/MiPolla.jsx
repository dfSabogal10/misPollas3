// Eliminar imports que no se usan
import {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {Pollas} from '../../api/Pollas.js';
import Collapsible from 'react-collapsible';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

// Indentación
export default class MiPolla extends Component {

    constructor(props){

        super(props);
        this.state={partido:null};
    }


    apostar() {
        var pollas = new Object();
        pollas.name = this.props.mipolla.nombre;
        pollas.visitante  = this.refs.visitante.value;
        pollas.local = this.refs.local.value;
        var jsonString= JSON.stringify(pollas);
        console.log(jsonString);
        var user = Meteor.call('Pollas.apostar',jsonString);
        console.log('siretorno:',user);
        console.log('Resultado:',jsonString);

    }


    componentWillMount(){
        console.log('empieza will mount');
        var partido=null;
        Meteor.call('Pollas.darPartido',this.props.mipolla.idPartido,(err, res) =>{
            if (err) { console.log(err); }
            else {
                console.log('made it!');
                partido=res.data.fixture;
        // this.setState({ partido: res.data.fixture});
            }});
        this.setState({ partido: partido});
        console.log('termina will mount');

    }

//MKKKKK DOS OPCIONES, 1 ya puso un marcador 2 no ha puesto nada
    render(){
        console.log('RENDER');


        if(this.props.mipolla.apostado ===true)
            {

            console.log('PROPS',this.props);
            return (
                <Collapsible trigger={this.props.mipolla.nombre}>
                    <div className="container">
                        <div className="row">
                        <div className="row">
                                <div className="col-md-3 middle-column">
                                    {'Monto: '+this.props.mipolla.monto}
                                </div>
                        </div>
                        <div className="row">
                            {/* <div className="col-md-3 local-column">
                            </div> */}
                            <div className="col-md-3 middle-column">
                                {/* {this.state.partido.date.split("T")[0] + "\t"+"-"+"\t"+partido.date.split("T")[1].substring(0,5)} */}
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
                                <h5>{this.props.mipolla.local}</h5>
                            </div>
                            <div className="col-md-2 middle-column">
                                <h5>vs</h5>
                            </div>
                            <div className="col-md-3">
                                <h5>{this.props.mipolla.visitante}</h5>
                            </div>
                        </div>
                            <div className="row">
                            <div className="col-md-3 local-column">
                                <h5>{this.props.mipolla.marcadorLocal}</h5>
                            </div>
                            <div className="col-md-2 middle-column">
                                <h5>-</h5>
                            </div>
                            <div className="col-md-3">
                                <h5>{this.props.mipolla.marcadorVisitante}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 local-column">
                            </div>
                            <div className="col-md-2 middle-column">
                                {/* <button className="btn-primary" onClick={this.apostar.bind(this)}>Apostar</button> */}
                            </div>
                        </div>
                        <div className="row">
                            <br></br><br></br>
                        </div>

                    </div>
                </div>
        </Collapsible>
          //       <table className="fixes">
          //       <thead>
          //        <tr>
          //            <th>Nombre</th>
          //            <th>Monto</th>
          //            <th>Usuarios Invitados</th>
          //            <th>Equipo Local</th>
          //            <th>Equipo Visitante</th>
          //            <th>Goles Local</th>
          //            <th>Goles Visitante</th>
          //        </tr>
          //    </thead>
          //    <tbody>
          //        <tr>
          //            <td>{this.props.mipolla.nombre} </td>
          //            <td>{this.props.mipolla.monto} </td>
          //            <td>{this.props.mipolla.usuarioInvita} </td>
          //            <td>{this.props.mipolla.local} </td>
          //            <td>{this.props.mipolla.visitante} </td>
          //            <td>{this.props.mipolla.marcadorLocal} </td>
          //            <td>{this.props.mipolla.marcadorVisitante} </td>
          //        </tr>
          //    </tbody>
          // </table>
          );



        }

        else
            {

            console.log('PROPS',this.props);
            return (
              //       <table className="fixes">
              //       <thead>
              //        <tr>
              //            <th>Nombre</th>
              //            <th>Monto</th>
              //            <th>Usuarios Invitados</th>
              //            <th>Equipo Local</th>
              //            <th>Equipo Visitante</th>
              //            <th>Goles Local</th>
              //            <th>Goles Visitante</th>
              //            <th> </th>
              //        </tr>
              //    </thead>
              //    <tbody>
              //        <tr>
              //            <td>{this.props.mipolla.nombre} </td>
              //            <td>{this.props.mipolla.monto} </td>
              //            <td>{this.props.mipolla.usuarioInvita} </td>
              //            <td>{this.props.mipolla.local} </td>
              //            <td>{this.props.mipolla.visitante} </td>
              //            <td> <input type="number" ref="visitante" /></td>
              //            <td> <input type="number" ref="local" /></td>
              //            <button onClick={this.apostar.bind(this)}>Apostar</button>
              //        </tr>
              //    </tbody>
              // </table>
                            <Collapsible trigger={this.props.mipolla.nombre}>
                                <div className="container">
                                    <div className="row">
                                    <div className="row">
                                            <div className="col-md-3 middle-column">
                                                {'Monto: '+this.props.mipolla.monto}
                                            </div>
                                    </div>
                                    <div className="row">
                                        {/* <div className="col-md-3 local-column">
                                        </div> */}
                                        <div className="col-md-3 middle-column">
                                            {/* {this.state.partido.date.split("T")[0] + "\t"+"-"+"\t"+partido.date.split("T")[1].substring(0,5)} */}
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
                                            <h5>{this.props.mipolla.local}</h5>
                                        </div>
                                        <div className="col-md-2 middle-column">
                                            <h5>vs</h5>
                                        </div>
                                        <div className="col-md-3">
                                            <h5>{this.props.mipolla.visitante}</h5>
                                        </div>
                                    </div>
                                        <div className="row">
                                        <div className="col-md-3 local-column">
                                            <input type="number" ref="local" />
                                        </div>
                                        <div className="col-md-2 middle-column">
                                            <h5>-</h5>
                                        </div>
                                        <div className="col-md-3">
                                            <input type="number" ref="visitante" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3 local-column">
                                        </div>
                                        <div className="col-md-2 middle-column">
                                            <button className="btn-primary" onClick={this.apostar.bind(this)}>Apostar</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <br></br><br></br>
                                    </div>

                                </div>
                            </div>
                            </Collapsible>
              );
        }
    }}