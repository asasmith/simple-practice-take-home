import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | request/location', function (hooks) {
    setupApplicationTest(hooks);
    setupMirage(hooks);

    test('visiting /request/location', async function (assert) {
        this.server.createList('cpt-code', 1);
        const locations = this.server.createList('office', 5);

        await visit('/request/service');

        await click('[data-test-service-item] button');

        assert.equal(currentURL(), '/request/location');
        assert.dom('[data-test-location-item]').exists({ count: 5 });
        assert.dom('[data-test-location-item]').hasAnyText(locations[0].name);
    });
});
