import {
  getFooterCopy,
  getFullYear,
  getLatestNotification
} from "./utils";

test('getFullYear should return the cuttent year', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toEqual(currentYear);
});

test('should return Holberton School when true', () => {
  const strForTrue = getFooterCopy(true);
  expect(strForTrue).toEqual('Holberton School');
});

test('should return Holberton School main dashboard when false', () => {
  const strForFalse = getFooterCopy(false);
  expect(strForFalse).toEqual('Holberton School main dashboard');
});

test('should return the correct string', () => {
  const correctstr = getLatestNotification();
  expect(correctstr).toContain('Urgent');
})