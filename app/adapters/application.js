import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  // namespace: 'api',
  host: 'http://localhost:5000',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});