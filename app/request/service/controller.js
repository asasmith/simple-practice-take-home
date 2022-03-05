import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RequestServiceController extends Controller {
    @service router;
    @service appointmentSteps;

    @action
    onLocationSelect() {
        const { router } = this;

        this.appointmentSteps.setIsActive(2);
        router.transitionTo('request.location');
    }
}
