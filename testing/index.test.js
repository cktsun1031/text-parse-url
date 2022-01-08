const { config, contentParseURL } = require('../src/index')()

/* eslint-disable no-undef */

test('URL Parsing - One URL', () => {
  const text = 'Hello www.google.com !!!'
  let target = contentParseURL(text)
  if (target !== null && target.length > 0) target = target.sort()
  expect(target).toEqual(['www.google.com'])
})

test('URL Parsing - No Equal URL', () => {
  const text = "google.com Hello google.com !!!google.com LOL!'google.com'"
  let target = contentParseURL(text, {
    noEqual: true,
  })
  if (target !== null && target.length > 0) target = target.sort()
  expect(target).toEqual(['google.com'])
})

test('URL Parsing - with Prefix Only URL #1', () => {
  const text = "google.com Hello google.com !!!google.com LOL!'google.com'"
  let target = contentParseURL(text, {
    withPrefixOnly: true,
  })
  if (target !== null && target.length > 0) target = target.sort()
  expect(target).toEqual([])
})

test('URL Parsing - with Prefix Only URL #2', () => {
  const text =
    "https://google.com Hello google.com !!!google.com LOL!'www.youtube.com'"
  let target = contentParseURL(text, {
    withPrefixOnly: true,
  })
  if (target !== null && target.length > 0) target = target.sort()
  expect(target).toEqual(['https://google.com', 'www.youtube.com'])
})

test('URL Parsing - with Prefix Only and No Equal URL', () => {
  const text =
    "https://google.com Hello https://google.com !!!google.com LOL!'ww1.google.com'"
  let target = contentParseURL(text, {
    withPrefixOnly: true,
    noEqual: true,
  })
  if (target !== null && target.length > 0) target = target.sort()
  expect(target).toEqual(['https://google.com'])
})

test('Infomation - Get Config', () => {
  expect(config).toEqual({
    noEqual: false,
    withPrefixOnly: false,
  })
})

test('Error Testing - Error Type', () => {
  try {
    contentParseURL('abc', {
      withPrefixOnly: 12,
    })
  } catch (e) {
    expect(e.message).toBe('Error Types of option!')
  }
})
