import Ember from 'ember';

export default Ember.ArrayController.extend({
  environment: null,
  environments: [
    { id: 'uat', value: 'http://localhost:5000' },
    { id: 'dev', value: 'http://localhost:4000' },
    { id: 'si', value: 'http://localhost:3000' },
    { id: 'test', value: 'http://localhost:2000' }
  ],

  // Observers
  //
  currentScenarioObserver: function(){
    var scenarioId = this.get('content.selected');
    if (scenarioId) {
      this.transitionToRoute("scenario", scenarioId);
    } else {
      this.transitionToRoute("scenarios");
    }
  }.observes('content.selected'),

  environmentObserver: function(){
    var id = this.get('environment');
    var environment = this.get('environments').find(function(e){ return e.id == id });
    Cyclopta.__container__.lookup('adapter:application').set('host', environment.value);
  }.observes('environment'),

});
