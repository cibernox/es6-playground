import Ember from "ember";

export default Ember.ArrayController.extend({
  queryParams: ['environment', 'scenario'],
  environment: null,
  scenario: null,
  environments: [
    { id: "uat", value: "http://localhost:5000" },
    { id: "dev", value: "http://localhost:5000" },
    { id: "si", value: "http://localhost:5000" },
    { id: "test", value: "http://localhost:5000" }
  ]
});