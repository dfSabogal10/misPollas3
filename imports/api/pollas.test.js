import { Meteor } from "meteor/meteor";
import {Pollas} from "./Pollas.js";
import { assert } from "meteor/practicalmeteor:chai";
import { resetDatabase } from "meteor/xolvio:cleaner";


if (Meteor.isServer) {
describe("pollas", function () {
  beforeEach(function () {
    resetDatabase();
  });

  it("add a poll", function () {
    // This code will be executed by the test driver when the app is started
    // in the correct mode
    const agregar = Meteor.server.method_handlers["Pollas.agregarPolla"];
    var idPartido="123";
    var pollas = new Object();
    pollas.idpartio = idPartido;
    pollas.idUsuario = "John";
    pollas.nombre = "Champions Semi";
    pollas.monto = "10000";
    pollas.usuariosInvitar = "2PAC";
    pollas.homeTeamName = "Real Madrid FC";
    pollas.awayTeamName = "Monaco FC";
    var jsonString= JSON.stringify(pollas);
    var user = Meteor.call("Pollas.agregarPolla",jsonString);
  //  agregar.call(jsonString);
    assert.equal(Pollas.find().count(), 1);

  }),
  it("get a Game from the API", function () {
    // This code will be executed by the test driver when the app is started
    // in the correct mode
  var  day = "10";
  var  month= "04";
  var  year="2017";
  var  day2= "20";
  var  month2="04";
  var  year2="2017";

    Meteor.call("getGame",day,month,year,day2,month2,year2,(err, res) =>{
   if (err) { console.log(err);

     assert.equal("ERROR en el API", 1);
}
   else {
     assert.equal(res.data.fixtures[0].result.goalsHomeTeam, 3);
     assert.equal(res.data.fixtures[0].homeTeamName, "Juventus Turin");


   } });

  })

})
}
