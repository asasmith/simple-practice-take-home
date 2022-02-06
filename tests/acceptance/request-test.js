import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | request', function (hooks) {
    setupApplicationTest(hooks);
    setupMirage(hooks);

    test('visiting /request', async function (assert) {
        this.server.createList('cpt-code', 2);

        await visit('/request');

        assert.equal(currentURL(), '/request/service');
    });
});
