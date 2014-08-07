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
  ],

  // CPs
  currentScenario: function(){
    return this.findBy('name', this.get('scenario'));
  }.property('scenario'),

  currentExample: function(){
    var exampleId = this.get("exampleId");
    console.log('calculating currentExample');
    if (exampleId) {
      return this.get('currentScenario.examples').findBy('id', exampleId);
    } else {
      return this.get('currentScenario.examples.firstObject');
    }
  }.property('currentScenario.examples.firstObject', 'exampleId')
});