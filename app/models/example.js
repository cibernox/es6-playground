import DS from 'ember-data';

export default      DS.Model.extend({
  index:            DS.attr('number'),
  description:      DS.attr('string'),
  status:           DS.attr('string'),
  output:           DS.attr('string'),
  scenario:         DS.belongsTo('scenario'),
  editableFields:   DS.attr('raw')
});