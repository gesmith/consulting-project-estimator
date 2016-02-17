import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('feature', 'Unit | Model | feature', {
  // Specify the other units that are required for this test.
  needs: ['model:task', 'model:estimate']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('should have many tasks', function(assert) {
  const Feature = this.store().modelFor('feature');
  const relationship = Ember.get(Feature, 'relationshipsByName').get('tasks');

  assert.equal(relationship.key, 'tasks', 'has relationship with task');
  assert.equal(relationship.kind, 'hasMany', 'kind of relationship is hasMany');
});
