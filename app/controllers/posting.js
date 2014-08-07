import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['environment', 'scenario', 'example'],
  environment: null,
  scenario: null,
  example: null,
  environments: [
    { id: 'uat', value: 'http://localhost:5000' },
    { id: 'dev', value: 'http://localhost:5000' },
    { id: 'si', value: 'http://localhost:5000' },
    { id: 'test', value: 'http://localhost:5000' }
  ],

  // CPs
  currentScenario: function(){
    return this.findBy('name', this.get('scenario'));
  }.property('scenario'),

  currentExample: function(){
    var exampleIndex = parseInt(this.get('example')) || 1,
            examples = this.get('currentScenario.examples');

    return examples && examples.findBy('index', exampleIndex);
  }.property('currentScenario.examples.@each.index', 'example'),

  // Observers
  resetExampleIndex: function() {
    this.set('example', 1);
  }.observes('currentScenario')

});