import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nav-pane-test', 'Integration | Component | nav pane', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#nav-pane}}
      template block text
    {{/nav-pane}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
