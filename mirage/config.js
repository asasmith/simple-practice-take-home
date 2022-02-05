export default function () {
    this.namespace = 'api';

    this.get('/cpt-code', function (schema) {
        return schema.cptCodes.all();
    });
}
