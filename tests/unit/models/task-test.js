import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('task', 'Unit | Model | task', {
  // Specify the other units that are required for this test.
  needs: ['model:feature']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('should own a feature', function(assert) {
  const Task = this.store().modelFor('task');
  const relationship = Ember.get(Task, 'relationshipsByName').get('feature');

  assert.equal(relationship.key, 'feature', 'has relationship with feature');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
});
