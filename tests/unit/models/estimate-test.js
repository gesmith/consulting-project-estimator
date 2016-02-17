import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('estimate', 'Unit | Model | estimate', {
  // Specify the other units that are required for this test.
  needs: ['model:project', 'model:feature']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('should own a project', function(assert) {
  const Estimate = this.store().modelFor('estimate');
  const relationship = Ember.get(Estimate, 'relationshipsByName').get('project');

  assert.equal(relationship.key, 'project', 'has relationship with project');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
});

test('should have many features', function(assert) {
  const Estimate = this.store().modelFor('estimate');
  const relationship = Ember.get(Estimate, 'relationshipsByName').get('features');
//debugger;
  assert.equal(relationship.key, 'features', 'has relationship with feature');
  assert.equal(relationship.kind, 'hasMany', 'kind of relationship is hasMany');
});
