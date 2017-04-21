// Eliminar imports que no se usan
import {Component, PropTypes} from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import {Projects} from '../../api/Projects.js';
import Pollas from './Pollas.jsx';
import FacebookLogin from 'react-facebook-login';
import Partidos from './Partidos.jsx';
import Navbar from  './Navbar.jsx';
import Home from './Home.jsx';
import FormNuevaPolla from './FormNuevaPolla.jsx';


import {
          BrowserRouter as Router,
          Route,
          Link
        } from 'react-router-dom';

// Tener cuidado con la indentación
export class App extends Component {

    constructor(props){
        super(props);
        this.state ={
            idLogueado: '123',
            nombre:''
        };

        localStorage.setItem('user', JSON.stringify(this.state.idLogueado));

    }


    responseFacebook(response){
        var user = Meteor.call('Users.buscarUsuario',response);
        console.log('siretorno:',user);
        console.log(response);
        this.setState({idLogueado: response.userID,
            nombre:response.name});
        localStorage.setItem('user', JSON.stringify(this.state.idLogueado));

        console.log(this.state.idLogueado);
    }


    render() {
  //   if(this.state.idLogueado== "")
  //   {
  //   return (
    //      <section>
    //          <header className="landing-header">
    //              <div className="header-content">
    //                  <div className="header-content-inner">
    //                      <h1 id="homeHeading">Bienvenidos a Mis Pollas</h1>
    //                      <p>¿Estás cansado de tener que utilizar excel? ¿Gestionar los marcadores? ¿Determinar quien ha pagado, quien no? ¿Que tengas que usar cash? ¿Ademas no poder saber quien ha apostado? Vamos a crear una nueva forma de hacer tus pollas de manera social y utilizando las facilidades tecnológicas!</p>
    //                      <FacebookLogin appId="1298913943519790" autoLoad={true} fields="name,email,picture" callback={this.responseFacebook.bind(this)}/>
    //                  </div>
    //              </div>
    //          </header>
    //      </section>
  //   );
  // }
  // else {
        return(
            <div>
                {/* <Router history={hashRouter}>
                    <IndexRoute component={Home}></IndexRoute>

                </Router> */}
                <Router>
            <div>
                    <Navbar/>


              <Route exact path="/" component={Home}/>
              <Route path="/verPartidos" component={Partidos}/>
                    <Route path="/FormNuevaPolla/:idPartido/:homeTeamName/:awayTeamName" component={FormNuevaPolla} />
                    <Route path="/Pollas" component={Pollas}/>
                    <Route path="/Invitaciones a pollas" />
                    <Route path="/Perfil" />


            </div>
          </Router>
                {/* <Home/> */}
                {/* <div className="fondo">
                    <h1>Mis pollas</h1>
                     */}
            </div>

        );
  // }

    }
}


App.propTypes = {
    projects : PropTypes.array.isRequired
};


export default AppContainer = createContainer(()=>{
    Meteor.subscribe('projects');
    Meteor.subscribe('usuarios');


    return {
        projects: Projects.find({}).fetch(),
        top: Projects.find({}, {sort: {votes: -1}, limit:10}).fetch(),
        favourites: Projects.find({ FavouriteUsers: Meteor.userId() }),
    };
}, App);
