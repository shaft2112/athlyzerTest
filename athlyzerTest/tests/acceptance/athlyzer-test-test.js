import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import {
  click,
  currentURL,
  visit
} from '@ember/test-helpers';

module('Acceptance | athlyzer test', function(hooks) {
  setupApplicationTest(hooks);

  test('should navigate to facebookroute', async function(assert) {
  await visit('/');
  await click(".menu-facebookroute");
  assert.equal(currentURL(), '/facebookroute', 'should navigate to facebookroute');
  });

  test('should navigate to videoroute', async function(assert) {
  await visit('/');
  await click(".menu-videoroute");
  assert.equal(currentURL(), '/videoroute', 'should navigate to videoroute');
  });

  test('should show link2', async function(assert) {
  });

});
