import assert = require('power-assert');
import { JSDOM } from 'jsdom';
import getDomScale from '../src/getDomScale';
import sinon = require('sinon');

describe('getDomScale', () => {
  it('normal', () => {
    /**
     * jsdom 无法真正渲染 dom 节点， 导致 getBoundingClientRect 返回数据都是 0
     * 需要模拟 getBoundingClientRect 方法
     * */
    const { window } = new JSDOM(`<!DOCTYPE html><html>
      <body></body>
    </html>`);
    const { document } = window;
    const dom = document.createElement('div');
    dom.style.width = '50px';
    dom.style.height = '50px';

    // 模拟 body.style.transform=scale(2, 1)
    const getBoundingClientRectStub = sinon.stub(dom, 'getBoundingClientRect');
    getBoundingClientRectStub.returns({
      width: 100, height: 50, left: 0, top: 0, right: 100, bottom: 50, x: 0, y: 0,
      toJSON: () => ({})
    });
    sinon.stub(dom, 'offsetHeight').get(() => 50);
    sinon.stub(dom, 'offsetWidth').get(() => 50);
    assert.deepEqual(getDomScale(dom), { x: 2, y: 1 });
    getBoundingClientRectStub.restore();
  });
});
