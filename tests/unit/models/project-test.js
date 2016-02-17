import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('project', 'Unit | Model | project', {
  // Specify the other units that are required for this test.
  needs: ['model:estimate']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('should have many estimates', function(assert) {
  const Project = this.store().modelFor('project');
  const relationship = Ember.get(Project, 'relationshipsByName').get('estimates');

  assert.equal(relationship.key, 'estimates', 'has relationship with estimate');
  assert.equal(relationship.kind, 'hasMany', 'kind of relationship is hasMany');
});
