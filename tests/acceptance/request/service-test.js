import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | request/service', function (hooks) {
    setupApplicationTest(hooks);
    setupMirage(hooks);

    test('visiting /request/service', async function (assert) {
        const services = this.server.createList('cpt-code', 2);

        await visit('/request/service');

        assert.equal(currentURL(), '/request/service');
        assert.dom('[data-test-sign-in]').hasText('Already a client, Sign In');
        assert.dom('[data-test-service-item]').exists({ count: 2 });
        assert
            .dom('[data-test-service-item]')
            .hasAnyText(services[0].description);
    });
});
