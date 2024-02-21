const { fromJS } = require('immutable');
const { List, Map } = require('immutable');

export function concatElements(page1, page2) {
    const li1 = List(page1);
    const li2 = List(page2);
    return (li1.concat(li2));
}

export function mergeElements(page1, page2) {
    const m1 = Map(page1);
    const m2 = Map(page2);
    return (m1.merge(page2));
}