import { imageFetcher } from './quotes';

afterEach(() => {
  delete global.fetch;
});

it('resolves to the redirected image url', async () => {
  const url = 'https://fastly.picsum.photos/id/1/1920/1080.jpg';
  global.fetch = jest.fn(() => Promise.resolve({ ok: true, url }));

  await expect(imageFetcher()).resolves.toBe(url);
  expect(global.fetch.mock.calls[0][0]).not.toMatch(/unsplash/);
});

it('rejects instead of returning the url of an error page', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({ ok: false, status: 503, url: 'https://example.com/503' })
  );

  await expect(imageFetcher()).rejects.toThrow('503');
});
