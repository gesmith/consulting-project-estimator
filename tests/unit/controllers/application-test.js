import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:application', 'Unit | Controller | application', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('application shows the navbar by default', function(assert) {
  const controller = this.subject();
  assert.equal(controller.get('showNavBar'), true, 'navBar is shown by default');
});
