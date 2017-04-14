import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";
import {Projects} from "../../api/Projects.js"



export default class Home extends Component {

votarPorProyecto(){
	Meteor.call('Projects.votarPorProyecto',this.props.project._id);
}
añadirAFavoritos(){
	Meteor.call('Projects.añadirAFavoritos',this.props.project._id);
}
	render() {


		return(
		<section>
			<header className="intro-header" >
					<div className="container">
							<div className="row">
									<div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
											<div className="site-heading">
													<h1>Bienvenidos a mis pollas</h1>
													<hr className="small"></hr>
													<span className="subheading">Empieza ya a apostar con tus amigos!</span>
													<br></br>
													<br></br>
													<br></br>
													<br></br>
													<br></br>
													<br></br>

											</div>
									</div>
							</div>
					</div>
			</header>
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<h1 className="h1-home"> Crea pollas con tus amigos </h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet rhoncus lectus, sit amet maximus nunc tristique ut. Etiam aliquet feugiat rutrum. Aliquam scelerisque vulputate fringilla. Ut fringilla, ipsum sit amet placerat finibus, tellus odio dapibus tortor, ut molestie ligula est vel dui. Suspendisse interdum, tortor in feugiat molestie, turpis mi fermentum augue, a maximus tellus massa quis leo. Fusce sit amet pellentesque sem. Suspendisse dapibus dui vitae risus aliquet tincidunt. Proin mattis velit a lacus fermentum facilisis. Mauris et urna diam. Proin vel mi et turpis semper luctus vitae sed dolor. Integer vel varius diam, ac tristique quam. Quisque non rhoncus erat, quis condimentum lorem. Nunc pellentesque, nisi id mollis mollis, dui elit mattis sem, a cursus nisi mauris a urna. Sed gravida pellentesque felis, quis viverra odio.</p>
					</div>
					<div className="col-md-6">
						<h1 className="h1-home"> Imagen </h1>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<h1 className="h1-home"> Imagen</h1>
					</div>
					<div className="col-md-6">
						<h1 className="h1-home"> Invita a tus amigos por facebook </h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet rhoncus lectus, sit amet maximus nunc tristique ut. Etiam aliquet feugiat rutrum. Aliquam scelerisque vulputate fringilla. Ut fringilla, ipsum sit amet placerat finibus, tellus odio dapibus tortor, ut molestie ligula est vel dui. Suspendisse interdum, tortor in feugiat molestie, turpis mi fermentum augue, a maximus tellus massa quis leo. Fusce sit amet pellentesque sem. Suspendisse dapibus dui vitae risus aliquet tincidunt. Proin mattis velit a lacus fermentum facilisis. Mauris et urna diam. Proin vel mi et turpis semper luctus vitae sed dolor. Integer vel varius diam, ac tristique quam. Quisque non rhoncus erat, quis condimentum lorem. Nunc pellentesque, nisi id mollis mollis, dui elit mattis sem, a cursus nisi mauris a urna. Sed gravida pellentesque felis, quis viverra odio.</p>

					</div>
				</div>
			</div>
		</section>


		);
	}
}



// Nav.propTypes = {
// 	project: PropTypes.object.isRequired
// }
