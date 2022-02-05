export default function () {
    this.namespace = 'api';

    this.get('/cpt-codes', function (schema) {
        return schema.cptCodes.all();
    });
}
