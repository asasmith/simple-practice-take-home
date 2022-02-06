import { Factory } from 'miragejs';
import faker from '@fakerjs/faker';

export default Factory.extend({
    name() {
        return faker.lorem.words();
    },

    phone() {
        return faker.phone.phoneNumber();
    },

    isVideo() {
        return faker.datatype.boolean();
    },

    geoLocation() {
        return {
            lat: faker.address.latitude(),
            lng: faker.address.longitude(),
        };
    },

    isPublic() {
        return faker.datatype.boolean();
    },
});
