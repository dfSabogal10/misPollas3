import { Meteor } from "meteor/meteor";
import {Users} from "./Users.js";
import { assert } from "meteor/practicalmeteor:chai";
import { resetDatabase } from "meteor/xolvio:cleaner";

if (Meteor.isServer) {
describe("usuarios", function () {
  beforeEach(function () {
    resetDatabase();
  });

})
it("create user from facebook", function () {
  var user = Meteor.call("Users.buscarUsuario","jesus");
  assert.equal(Users.find().count(), 1);
})


}
