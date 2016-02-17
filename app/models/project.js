import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  created_at: DS.attr('date'),
  estimate: DS.hasMany('estimate')
});
