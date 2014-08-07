import DS from 'ember-data';

export default DS.Model.extend({
  index:       DS.attr('number'),
  description: DS.attr('string'),
  scenario:    DS.belongsTo('scenario'),
  fields:      DS.attr('raw')
});