import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-challenge/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | task/list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Task::List />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Task::List>
        template block text
      </Task::List>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
