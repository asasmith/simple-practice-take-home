import { Factory } from 'miragejs';
import faker from '@faker-js/faker';

export default Factory.extend({
    description() {
        return faker.random.arrayElement([
            'Psychiatric Diagnostic Evaluation',
            'Intro Call',
        ]);
    },

    duration() {
        return faker.random.arrayElement([50, 10, 15, 30]);
    },

    rate() {
        return faker.finance.amount();
    },

    callToBook() {
        return faker.datatype.boolean();
    },
});
