import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  let current = object;
  for (const key of array) {
    current = current[key];
  }
  if (typeof current === 'string' || current instanceof Map) {
    return current
  } else {
    return undefined
  }
}
