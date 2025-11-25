import * as sinon from 'sinon';
import * as assert from 'power-assert';
import retry from '../src/retry';

describe('retry', () => {
  let sandbox: sinon.SinonSandbox;
  let clock: sinon.SinonFakeTimers;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    sandbox.restore();
    clock.restore();
  });

  describe('基本功能测试', () => {
    it('第一次执行就成功', async () => {
      const fn = sinon.stub().resolves('success');
      const result = await retry(fn);

      assert.strictEqual(result, 'success');
      assert(fn.calledOnce);
    });

    it('重试后成功', async () => {
      const fn = sinon.stub()
        .onFirstCall().rejects(new Error('fail 1'))
        .onSecondCall().rejects(new Error('fail 2'))
        .onThirdCall().resolves('success');

      const promise = retry(fn, { retries: 2 });

      // 推进时间以触发重试
      await clock.tickAsync(1000);
      await clock.tickAsync(1000);

      const result = await promise;

      assert.strictEqual(result, 'success');
      assert(fn.calledThrice);
    });

    it('重试次数耗尽后抛出错误', async () => {
      const error = new Error('always fail');
      const fn = sinon.stub().rejects(error);

      const promise = retry(fn, { retries: 2 });

      // 推进时间
      await clock.tickAsync(1000);
      await clock.tickAsync(1000);

      try {
        await promise;
        assert.fail('应该抛出错误');
      } catch (e) {
        assert.strictEqual(e, error);
      }
      assert(fn.calledThrice);
    });
  });

  describe('延迟策略测试', () => {
    it('使用固定延迟', async () => {
      const fn = sinon.stub()
        .onFirstCall().rejects(new Error('fail'))
        .onSecondCall().resolves('success');

      const onRetry = sinon.spy();
      const promise = retry(fn, {
        retries: 1,
        delay: 100,
        exponential: false,
        onRetry
      });

      assert(onRetry.notCalled);

      await clock.tickAsync(100);

      const result = await promise;

      assert.strictEqual(result, 'success');
      assert(onRetry.calledOnce);
      assert.deepStrictEqual(onRetry.firstCall.args[0], {
        attempt: 1,
        error: new Error('fail'),
        waitTime: 100,
        remaining: 1
      });
    });

    it('使用指数退避', async () => {
      const fn = sinon.stub()
        .onFirstCall().rejects(new Error('fail 1'))
        .onSecondCall().rejects(new Error('fail 2'))
        .onThirdCall().resolves('success');

      const onRetry = sinon.spy();
      const promise = retry(fn, {
        retries: 2,
        delay: 100,
        exponential: true,
        onRetry
      });

      // 第一次重试
      await clock.tickAsync(1);
      assert(onRetry.calledOnce);
      assert.deepStrictEqual(onRetry.firstCall.args[0], {
        attempt: 1,
        error: new Error('fail 1'),
        waitTime: 100,
        remaining: 2
      });

      // 第二次重试
      await clock.tickAsync(100);
      assert(onRetry.calledTwice);
      assert.deepStrictEqual(onRetry.secondCall.args[0], {
        attempt: 2,
        error: new Error('fail 2'),
        waitTime: 200,
        remaining: 1
      });

      await clock.tickAsync(200);
      const result = await promise;
      assert.strictEqual(result, 'success');
    });
  });

  describe('配置参数测试', () => {
    it('自定义重试次数为0', async () => {
      const fn = sinon.stub().rejects(new Error('fail'));

      const promise = retry(fn, { retries: 0 });

      try {
        await promise;
        assert.fail('应该抛出错误');
      } catch (e) {
        assert.strictEqual(e.message, 'fail');
      }
      assert(fn.calledOnce);
    });

    it('自定义延迟时间', async () => {
      const fn = sinon.stub()
        .onFirstCall().rejects(new Error('fail'))
        .onSecondCall().resolves('success');

      const promise = retry(fn, { delay: 500 });

      await clock.tickAsync(500);

      await promise;
      assert(fn.calledTwice);
    });
  });

  describe('错误处理测试', () => {
    it('保持错误类型', async () => {
      const typeError = new TypeError('type error');
      const fn = sinon.stub().rejects(typeError);

      const promise = retry(fn, { retries: 1 });

      await clock.tickAsync(1000);

      try {
        await promise;
        assert.fail('应该抛出错误');
      } catch (e) {
        assert.strictEqual(e, typeError);
      }
    });

    it('回调函数错误不影响重试', async () => {
      const fn = sinon.stub()
        .onFirstCall().rejects(new Error('fail'))
        .onSecondCall().resolves('success');

      const onRetry = sinon.stub().throws(new Error('callback error'));

      const promise = retry(fn, {
        retries: 1,
        onRetry
      });

      await clock.tickAsync(1000);

      const result = await promise;

      assert.strictEqual(result, 'success');
      assert(fn.calledTwice);
      assert(onRetry.calledOnce);
    });
  });

  describe('异步函数测试', () => {
    it('支持异步函数', async () => {
      let attempts = 0;
      const asyncFn = async () => {
        attempts++;
        if (attempts < 2) {
          throw new Error('not ready');
        }
        return 'async success';
      };

      const promise = retry(asyncFn, { retries: 2 });

      await clock.tickAsync(1000);

      const result = await promise;

      assert.strictEqual(result, 'async success');
      assert.strictEqual(attempts, 2);
    });
  });

  describe('边界情况测试', () => {
    it('空配置对象', async () => {
      const fn = sinon.stub().resolves('success');
      const result = await retry(fn, {});

      assert.strictEqual(result, 'success');
      assert(fn.calledOnce);
    });

    it('未提供配置', async () => {
      const fn = sinon.stub().resolves('success');
      const result = await retry(fn);

      assert.strictEqual(result, 'success');
      assert(fn.calledOnce);
    });
  });
});