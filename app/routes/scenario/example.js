import Ember from "ember";

export default Ember.Route.extend({
  actions: {
    // Runs this example.
    //
    run: function(){
      this.context.save();
    },

    // Runs this example and advances to the next one.
    //
    runAdvance: function(){
      var route = this;
      this.context.save().finally(function(){
        Ember.run.later(route, 'send', 'advance', route.context, 500);
      });
    },
  }
});