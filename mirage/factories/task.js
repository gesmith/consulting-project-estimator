import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  description() {
    return faker.lorem.sentence();
  },
  complexity() {
    return faker.list.random(1, 2, 3, 4)();
  }
});
