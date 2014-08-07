import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return this.store.find('scenario');
  },

  actions: {
    start: function(){
      alert("Let's run " + this.controller.scenario + " in " + this.controller.environment);
    }
  }
});