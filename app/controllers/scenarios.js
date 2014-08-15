import Ember from 'ember';

export default Ember.ArrayController.extend({
  environment: null,
  environments: [
    { id: 'uat', value: 'http://localhost:5000' },
    { id: 'dev', value: 'http://localhost:5000' },
    { id: 'si', value: 'http://localhost:5000' },
    { id: 'test', value: 'http://localhost:5000' }
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
  }.observes('content.selected')
});
