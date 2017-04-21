import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
// Pueden eliminar este import que no se usa: import {HTTP} from 'meteor/http';
// Y agregar el Check:
import { check } from 'meteor/check';

export const Pollas = new Mongo.Collection('pollas');
if (Meteor.isServer) {

  // This code only runs on the server
    Meteor.publish('pollas', function projectsPublication() {

        return Pollas.find();

    });
}

// Nuevamente recuerden ser más pulidos con la indentación para una mejor comprensión y facilidad de lectura
Meteor.methods({
    'Pollas.agregarPolla'(polla){
        var polluela = JSON.parse(polla);

      // No olviden realizar la validación de los campos antes del insert para mayor seguridad, algo como:
        check(polluela, Object);

        // Realizar el check de los atributos del objeto
        check(polluela, {
            usuariosInvitar: String,
            monto: Number,
            idpartio: Number,
            nombre: String,
            idUsuario: Number,
            homeTeamName: String,
            awayTeamName: String
        });

        Pollas.insert({'usuarioInvita':polluela.usuariosInvitar,
            'monto': polluela.monto,
            'idPartido': polluela.idpartio,
            'nombre': polluela.nombre,
            'userName' :polluela.idUsuario,
            'local' :polluela.homeTeamName,
            'visitante' :polluela.awayTeamName,
            'marcadorLocal' :0,
            'marcadorVisitante' :0,
            'apostado' :false
        });

        return 'Agregado';
            // window.alert('You have been registered');
    },

    'Pollas.vermispollas'(usuario){
        this.unblock();

        check(usuario, String);

        var polla = Pollas.find({'userName':usuario}).fetch();
        if (polla.length==0) {
            return 'NO';
        }
        else {
            return polla;
        }


    },
    'Pollas.apostar'(polla){
        var pollita = JSON.parse(polla);

        //Realizar el check de que es un objeto
        check(pollita, Object);

        // Realizar el check de los atributos del objeto
        check(pollita, {
            name: String,
            local: String,
            visitante: String
        });

        var pollis = Pollas.update({nombre:pollita.name},
            {$set: {
                'marcadorLocal' :pollita.local,
                'marcadorVisitante' :pollita.visitante,
                'apostado' :true
            } 
            });

        if (pollis.length==0) {
            return 'NO';
        }
        else {
            return pollis;
        }
    },
    'Pollas.darPartido'(idPartido){
        // Realizar el check del argumento
        check(idPartido, String);
        var apiUrl = 'http://api.football-data.org/v1/fixtures/'+idPartido;
        // Al igual que en el servidor, este X-Auth-Token es muy importante que lo almacenen en otro lado para evitar cualquier vulnerabilidad
        // que pueda ocasionar que les bloqueen el acceso al API como ha dicho John.
        return   Meteor.http.call('GET',apiUrl,{headers: {'X-Auth-Token': '4e27969f48ad48f1b60ac94fb6677aa5'}});
    }
});