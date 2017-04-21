import { Meteor } from 'meteor/meteor';
// Podrían eliminar los import que no usan
import { check } from 'meteor/check';

// Procuren ser más pulidos con la indentación para facilidad de comprensión
// de la jerarquía del código
Meteor.startup(() => {
    Meteor.methods({
        getGame:function(day,month,year,day2,month2,year2)
        {
            this.unblock();
            // No se les olvide añadir la validación de los argumentos que llegan para mayor seguridad, sea con el check o el mdg:validated-method, podría ser:
            check(day, String);
            check(month, String);
            check(year, String);
            check(day2, String);
            check(month2, String);
            check(year2, String);
            var apiUrl = 'http://api.football-data.org/v1/competitions/440/fixtures?timeFrameStart='+year+'-'+month+'-'+day+'&timeFrameEnd='+year2+'-'+month2+'-'+day2;
            // Este X-Auth-Token es muy importante que lo almacenen en otro lado para evitar cualquier vulnerabilidad
            // que pueda ocasionar que les bloqueen el acceso al API como ha dicho John.
            return   Meteor.http.call('GET',apiUrl,{headers: {'X-Auth-Token': '4e27969f48ad48f1b60ac94fb6677aa5'}});
        }
    });
});
