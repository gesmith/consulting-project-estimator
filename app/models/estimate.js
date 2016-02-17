import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  created_at: DS.attr('date'),
  assumptions: DS.attr('string'),
  project: DS.belongsTo('project'),
  features: DS.hasMany('feature')
});
