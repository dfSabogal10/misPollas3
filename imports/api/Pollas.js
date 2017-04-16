import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";

export const Pollas = new Mongo.Collection("pollas");
if (Meteor.isServer) {

  // This code only runs on the server
  Meteor.publish("pollas", function projectsPublication() {

    return Pollas.find();

  });
}
Meteor.methods({
"Pollas.agregarPolla"(polla){
var polluela = JSON.parse(polla)
Pollas.insert({ "usuarioInvita":polluela.usuariosInvitar,
                   "monto": polluela.monto,
                   "idPartido": polluela.idpartio,
                  "nombre": polluela.nombre,
                 "userName" :polluela.idUsuario,
                 "local" :polluela.homeTeamName,
                 "visitante" :polluela.awayTeamName,
                 "marcadorLocal" :0,
                 "marcadorVisitante" :0,
                 "apostado" :false





                });

return "Agregado";
    // window.alert("You have been registered");
  },

  "Pollas.vermispollas"(usuario){
     this.unblock();

       var polla=Pollas.find({"userName":usuario}).fetch();
       if (polla.length==0) {
         return "NO";
       }
       else {
         return polla;
       }


     },
     "Pollas.apostar"(polla){
       var pollita = JSON.parse(polla)
       var polla= Pollas.update({nombre:pollita.name},{$set: { "marcadorLocal" :pollita.local,
                "marcadorVisitante" :pollita.visitante,
                "apostado" :true
 } });

                if (polla.length==0) {
                  return "NO";
                }
                else {
                  return polla;
                }

          }

}





);
