import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  description() {
    return faker.lorem.sentence();
  }
});
