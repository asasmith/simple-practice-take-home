import { Factory } from 'miragejs';
import faker from '@faker-js/faker';

export default Factory.extend({
    phone() {
        return faker.phone.phoneNumberFormat();
    },

    isVideo() {
        return faker.datatype.boolean();
    },

    name() {
        return this.isVideo ? 'video office' : 'office location';
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
