import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  description: DS.attr('string'),
  estimate: belongsTo(),
  tasks: hasMany()
});
