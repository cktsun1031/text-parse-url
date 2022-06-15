import { getUrl, getUrlAmount } from '../src/index';

test('URL Parsing - One URL', () => {
  const text = 'Hello www.google.com !!!';
  let target = getUrl(text);
  if (target !== null && target.length > 0) target = target.sort();
  expect(target).toStrictEqual(['www.google.com']);
});

test('URL Parsing - No Equal URL', () => {
  const text = "google.com Hello google.com !!!google.com LOL!'google.com'";
  let target = getUrl(text, {
    noEqual: true,
  });
  if (target !== null && target.length > 0) target = target.sort();
  expect(target).toStrictEqual(['google.com']);
});

test('URL Parsing - with Prefix Only URL #1', () => {
  const text = "google.com Hello google.com !!!google.com LOL!'google.com'";
  let target = getUrl(text, {
    withPrefixOnly: true,
  });
  if (target !== null && target.length > 0) target = target.sort();
  expect(target).toStrictEqual([]);
});

test('URL Parsing - with Prefix Only URL #2', () => {
  const text =
    "https://google.com Hello google.com !!!google.com LOL!'www.youtube.com'";
  let target = getUrl(text, {
    withPrefixOnly: true,
  });
  if (target !== null && target.length > 0) target = target.sort();
  expect(target).toStrictEqual(['https://google.com', 'www.youtube.com']);
});

test('URL Parsing - with Prefix Only and No Equal URL', () => {
  const text =
    "https://google.com Hello https://google.com !!!google.com LOL!'ww1.google.com'";
  let target = getUrl(text, {
    withPrefixOnly: true,
    noEqual: true,
  });
  if (target !== null && target.length > 0) target = target.sort();
  expect(target).toStrictEqual(['https://google.com']);
});

test('URL Number Parsing - Urls', () => {
  const text = 'google.com Hello google.com !!!googl';

  const target = getUrlAmount(text);

  expect(target).toStrictEqual(2);
});
