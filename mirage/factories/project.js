import { Factory } from 'ember-cli-mirage';
import { faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return faker.company.companyName();
  },
  created_at: new Date()
});
