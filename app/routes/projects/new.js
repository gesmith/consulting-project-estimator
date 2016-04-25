import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('project', {name: this.get('name')});
  },
  actions: {
    submit(model) {
      return model.save()
        .then(() => this.transitionTo('projects'));
    },
    cancel() {
      this.transitionTo('projects');
    }
  }
});
