import Ember from 'ember';

export default Ember.ArrayController.extend({
  environment: null,
  scenario: null,
  environments: [
    { id: 'uat', value: 'http://localhost:5000' },
    { id: 'dev', value: 'http://localhost:5000' },
    { id: 'si', value: 'http://localhost:5000' },
    { id: 'test', value: 'http://localhost:5000' }
  ],

  // Observers
  //
  currentScenarioObserver: function(){
    var scenario = this.get('scenario');
    if (scenario) {
      this.transitionToRoute("scenario", scenario);
    } else {
      this.transitionToRoute("scenarios");
    }
  }.observes('scenario')
});
