import DS from 'ember-data';

export default DS.Model.extend({
  scenario: DS.belongsTo('scenario')
});