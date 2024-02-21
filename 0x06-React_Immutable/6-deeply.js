import { fromJS, Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  return fromJS(page1).mergeDeep(page2);
}
