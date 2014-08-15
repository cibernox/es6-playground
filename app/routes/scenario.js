import Ember from "ember";

export default Ember.Route.extend({
  actions: {
    // Advances to the next example in this scenario.
    //
    advance: function(currentExample){
      var examples = this.context.get('examples');
      var currentIndex = examples.indexOf(currentExample);
      if (currentIndex + 1 !== examples.get('length')) {
        this.transitionTo("scenario.example", examples.objectAt(currentIndex + 1));
      }
    },

    // Goes back to the previous example in this scenario.
    //
    back: function(currentExample){
      var examples = this.context.get('examples');
      var currentIndex = examples.indexOf(currentExample);
      if (currentIndex !== 0) {
        this.transitionTo("scenario.example", examples.objectAt(currentIndex - 1));
      }
    }
  }
});