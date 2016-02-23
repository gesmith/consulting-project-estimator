import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  description: DS.attr('string'),
  complexity: DS.attr('number'),
  feature: belongsTo()
});
