import Model, { attr } from '@ember-data/model';

export default class CptCodeModel extends Model {
    @attr callToBook;
    @attr description;
    @attr duration;
    @attr rate;
}
