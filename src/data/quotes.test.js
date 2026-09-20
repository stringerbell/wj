import fs from 'fs';
import path from 'path';
import { quotes, images } from './quotes';

it('has a static background for every quote', () => {
  expect(images.length).toBeGreaterThanOrEqual(quotes.length);
});

it('only references image files that exist in public/', () => {
  images.forEach(image => {
    expect(image).not.toMatch(/^https?:/);
    const file = path.join(__dirname, '../../public', image);
    expect(fs.existsSync(file)).toBe(true);
  });
});
