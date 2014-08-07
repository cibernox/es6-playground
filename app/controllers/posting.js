import Ember from "ember";

export default Ember.ArrayController.extend({
  environments: [
    { name: "uat", value: "http://localhost:5000" },
    { name: "dev", value: "http://localhost:5000" },
    { name: "si", value: "http://localhost:5000" },
    { name: "test", value: "http://localhost:5000" }
  ]
});