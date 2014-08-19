import Ember from 'ember';

export default Ember.ArrayController.extend({
  endpoint: null,
  endpoints: window.CycloptaENV.endpoints,

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

  endpointObserver: function(){
    var id = this.get('endpoint');
    var endpoint = this.get('endpoints').find(function(e){ return e.id === id; });
    this.container.lookup('adapter:application').set('host', endpoint.value);
  }.observes('endpoint')
});
