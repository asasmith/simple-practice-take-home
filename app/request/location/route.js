import Route from '@ember/routing/route';

export default class RequestLocationRoute extends Route {
    model() {
        return this.store.findAll('office');
    }
}
