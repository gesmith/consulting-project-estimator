import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  estimate: DS.belongsTo('estimate'),
  tasks: DS.hasMany('task')
});
