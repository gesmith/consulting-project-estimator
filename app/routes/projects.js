import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      name: "Project 1",
      created_at: new Date()
    },
    {
      name: "Project 2",
      created_at: new Date()
    },
    {
      name: "Project 3",
      created_at: new Date()
    },
    {
      name: "Project 4",
      created_at: new Date()
    }];
  }
});
