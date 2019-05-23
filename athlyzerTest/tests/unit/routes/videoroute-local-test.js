import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | videoroute-local', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:videoroute-local');
    assert.ok(route);
  });
});
