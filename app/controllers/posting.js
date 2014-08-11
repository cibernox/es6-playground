import Ember from 'ember';
import EmberCPM from 'vendor/ember-cpm/dist/named-amd/ember-cpm';

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
  //

  currentScenario: function(){
    return this.findBy('description', this.get('scenario'));
  }.property('scenario'),

  sampleHtml: '<label>label!!!</label>',
  testSafeString: EmberCPM.Macros.htmlEscape('sampleHtml'),

  currentExample: function(){
    var exampleIndex = parseInt(this.get('example')) || 1,
            examples = this.get('currentScenario.examples');

    return examples && examples.findBy('index', exampleIndex);
  }.property('currentScenario.examples.@each.index', 'example'),

  // Observers
  //

  resetExampleIndex: function() {
    this.set('example', 1);
  }.observes('currentScenario'),

  // Actions
  //

  actions: {
    // Runs the given example.
    //
    run: function(example){
      example.save();
    },

    // Runs the given example and advances to the next one (if any).
    //
    runAdvance: function(example){
      var ctrl = this;
      example.save().finally(function(){
        Ember.run.later(ctrl, 'send', 'advance', 500);
      });
    },

    // Advances to the next example.
    //
    advance: function(){
      if (this.get('currentScenario.examples.length') > this.get('example')) {
        this.incrementProperty('example');
      }
    },

    // Goes back to the previous example.
    //
    back: function(){
      if (this.get('example') > 1) {
        this.decrementProperty('example');
      }
    }
  }

});
