# TODO
- [x] 添加 getDomScale 获取当前 dom 的真实 scale， 返回 { x: scaleX, y: scaleY }
- [x] sinon.useFakeTimers 改写 promiseQueue 单测
- [ ] 修改 typedoc-theme 将测试用例作为函数使用示例
  - 参考项目 typedoc-custom-theme-demo
- [ ] 单测覆盖率

## 1.0.0
- [x] 用 ts 重写

## BASE
- [x]单测用例
  - [x] assert 美化
- 测试覆盖率
  - [x] 覆盖率检测 nyc
  - [x] git提交自动检测测试覆盖率， 覆盖率不达标不允许上传
- [x] merge request rule
  - 单测全绿
  - 测试覆盖率 > 90%
- [x] use es6 import export
