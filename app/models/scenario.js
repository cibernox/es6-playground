import DS from "ember-data";

export default DS.Model.extend({
  description:  DS.attr('string'),
  examples:     DS.hasMany('example', {async: true})
});