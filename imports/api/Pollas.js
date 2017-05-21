import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";
import {HTTP} from "meteor/http"

/**
**  Code review (José Felipe Quiroga): No se si estoy en el repositorio que es, pero no veo las pruebas. Aunque para mi me parece que esta
**  bien la usabilidad, seria bueno tener alguna documentación sobre eso: tal vez pruebas con personas. De resto me parece que esta bien 
**  en el aspecto de seguridad (llamados a facebook) y los metodos modularizados.
**/

export const Pollas = new Mongo.Collection("pollas");
if (Meteor.isServer) {

  // This code only runs on the server
  Meteor.publish("pollas", function projectsPublication() {

    return Pollas.find();

  });
}
Meteor.methods({
"Pollas.agregarPolla"(polla){
  console.log(polla);

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

          },
          getGame:function(day,month,year,day2,month2,year2)
            {
              this.unblock();
              var apiUrl = "http://api.football-data.org/v1/competitions/440/fixtures?timeFrameStart="+year+"-"+month+"-"+day+"&timeFrameEnd="+year2+"-"+month2+"-"+day2
              return   Meteor.http.call("GET",apiUrl);
        },
      "Pollas.darPartido"(idPartido){
        var apiUrl = "http://api.football-data.org/v1/fixtures/"+idPartido;
        return   Meteor.http.call("GET",apiUrl,{headers: {"X-Auth-Token": "4e27969f48ad48f1b60ac94fb6677aa5"}});


}}




);
