import { DateTimeRandom } from '../src';

const R = new DateTimeRandom();

test('location', () => {
  // console.log(D.date());
  // console.log(D.datetime());
  // console.log(D.time());
  // console.log(D.datetime({ format: 'yyyy年MM月dd日' }))
  expect(R.date()).toMatch(/\d{4}-\d{2}-\d{2}/);
  expect(R.datetime({ format: 'yyyy年MM月dd日' })).toMatch(/\d{4}年\d{2}月\d{2}日/);
  expect(R.time()).toMatch(/\d{2}:\d{2}:\d{2}\+\d{2}:\d{2}/);
  expect(R.time({ short: true })).toMatch(/\d{2}:\d{2}:\d{2}/);
  const weekday = R.database.weekday;
  expect(weekday['en-US'].map((item) => item[0]).includes(R.weekday())).toBe(true);
  expect(weekday['en-US'].map((item) => item[1]).includes(R.weekday({ abbr: true }))).toBe(true);
  expect(weekday['zh-CN'].map((item) => item[0]).includes(R.weekday({ locale: 'zh-CN' }))).toBe(true);
  const month = R.database.month;
  expect(month['en-US'].map((item) => item[0]).includes(R.month())).toBe(true);
  expect(month['en-US'].map((item) => item[1]).includes(R.month({ abbr: true }))).toBe(true);
  expect(month['zh-CN'].map((item) => item[0]).includes(R.month({ locale: 'zh-CN' }))).toBe(true);
});
