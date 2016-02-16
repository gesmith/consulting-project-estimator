import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  name: DS.attr('string'),
  created_at: DS.attr('date'),
  assumptions: DS.attr('string'),
  project: belongsTo(),
  features: hasMany()
});
