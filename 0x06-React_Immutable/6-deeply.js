import { fromJS, Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);

  return fromJS(page1).mergeDeep(page2);
}
