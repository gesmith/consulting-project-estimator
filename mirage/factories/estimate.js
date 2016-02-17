import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) { return `Estimate ${i}`; },
  created_at: new Date(),
  assumptions: faker.lorem.paragraph()
});
