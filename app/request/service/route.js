import Route from '@ember/routing/route';

export default class RequestServiceRoute extends Route {
    model() {
        return this.store.findAll('cpt-code');
    }
}
