import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RequestServiceRoute extends Route {
    @service appointmentSteps;

    beforeModel() {
        const { appointmentSteps } = this;

        appointmentSteps.setIsActive(1);
    }

    model() {
        return this.store.findAll('cpt-code');
    }
}
