import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let projects = this.store.findAll('project');
    return projects;
  }
});
