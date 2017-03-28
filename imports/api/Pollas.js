import {Mongo} from "meteor/mongo";


export const Pollas = new Mongo.Collection("pollas");
if (Meteor.isServer) {

  // This code only runs on the server
  Meteor.publish('pollas', function projectsPublication() {

    return Pollas.find();

  });
}
Meteor.methods({
'Pollas.agregarPolla'(polla){

    Users.insert({ "userName":polla.name ,
                   "local": polla.local,
                   "visitante"; polla.visitante
                   });

    // window.alert('You have been registered');
  }
  });
