import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// Browsers only apply .wrapper's perspective to its direct children, so .section
// must preserve 3d for the ::after image to sit behind the quote and scroll slower.
// App.js imports the compiled App.css, so check both it and the scss source.
describe('parallax css', () => {
  const fs = require('fs');
  const path = require('path');
  const rule = (css, selector) => {
    const match = css.match(new RegExp(`(^|\\n)${selector} \\{([^}]*)\\}`));
    return match ? match[2] : '';
  };

  ['App.css', 'App.scss'].forEach(file => {
    const css = fs.readFileSync(path.join(__dirname, file), 'utf8');

    it(`${file} keeps the perspective scroll container`, () => {
      expect(rule(css, '\\.wrapper')).toMatch(/perspective:\s*2px/);
      expect(rule(css, '\\.wrapper')).toMatch(/overflow-y:\s*auto/);
    });

    it(`${file} preserves 3d on sections so the image is not flattened`, () => {
      expect(rule(css, '\\.section')).toMatch(/transform-style:\s*preserve-3d/);
    });

    it(`${file} pushes the image away from the camera`, () => {
      expect(rule(css, '\\.parallax::after')).toMatch(/translateZ\(-1px\)/);
    });
  });
});
