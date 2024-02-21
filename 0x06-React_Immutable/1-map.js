const { fromJS, Map } = require('immutable');

function getImmutableObject(object) {
    return Map(object);
}
export default getImmutableObject;