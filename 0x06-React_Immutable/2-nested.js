import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const mapobj = fromJS(object);
  return mapobj.getIn(array, undefined);
}
