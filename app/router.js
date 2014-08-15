import Ember from 'ember';

var Router = Ember.Router.extend({
  location: CycloptaENV.locationType
});

Router.map(function() {
  this.resource('scenarios', function(){
    this.resource('scenario', { path: '/:scenario_id' }, function(){
      this.route('example', { path: '/:example_id' });
    });
  });
  this.route('preview');
});

export default Router;
