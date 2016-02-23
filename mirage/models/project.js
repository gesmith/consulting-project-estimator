import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  //name: DS.attr('string'),
  //created_at: DS.attr('date'),
  estimate: hasMany()
});
