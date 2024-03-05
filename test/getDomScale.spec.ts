import assert = require('power-assert');
import { JSDOM } from 'jsdom';
import getDomScale from '../src/getDomScale';

describe('getDomScale', () => {
  // let window: Window;
  // let document: Document;
  // beforeEach(() => {

  // });
  it.skip('normal', (done) => {
    const { window } = new JSDOM(`<!DOCTYPE html><html>
      <style>
        body { width: 100px; height: 100px; }
      </style>
      <body style="width: 100px; height: 100px;"></body>
    </html>`);
    const document = window.document;

    const dom = document.createElement('div');
    dom.style.width = '100px';
    dom.style.height = '100px';
    dom.style.transform = 'scale(2)';
    document.body.appendChild(dom);
    document.onload = () => {
      console.log(window.getComputedStyle(document.body), document.body.getBoundingClientRect());
      console.log(dom.getBoundingClientRect(), '---------');
      done();
    }
    // assert.equal(getDomScale(dom), 2);
    // assert(getType({}) === 'Object');
  });
});
