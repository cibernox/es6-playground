import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(status) {
  var icon, color;
  if (status === 'pending') {
    icon = 'question-sign';
  } else if (status === 'success') {
    icon = 'ok';
  } else if (status === 'fail') {
    icon = 'remove';
  } else {
    return;
  }
  var html = Ember.String.fmt('<span class="glyphicon glyphicon-%@ status-%@"></span>', icon, status);
  return html.htmlSafe();
});
