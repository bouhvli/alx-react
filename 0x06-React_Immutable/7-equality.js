import { is } from 'immutable';

export default function areMapsEqual(map1, map2) {
  if (map1 === map2) {
    return true;
  }
  if (map1.size !== map2.size) {
    return false;
  }
  for (const [key, value] of map1) {
    const value_m2 = map2.get(key);
    if (!is(value, value_m2)) {
      return false;
    }
  }
  return true;
}
