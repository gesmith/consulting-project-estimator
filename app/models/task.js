import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  complexity: DS.attr('number'),
  feature: DS.belongsTo('feature')
});
