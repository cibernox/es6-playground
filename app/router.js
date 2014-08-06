import Ember from 'ember';

var Router = Ember.Router.extend({
  location: CycloptaENV.locationType
});

Router.map(function() {
  this.route('posting');
  this.route('preview');
});

export default Router;
