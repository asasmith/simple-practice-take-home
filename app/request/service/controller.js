import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RequestServiceController extends Controller {
    @service router;

    @action
    onLocationSelect() {
        const { router } = this;

        router.transitionTo('request.location');
    }
}
