# TODO
- [ ] 修改 typedoc-theme 将测试用例作为函数使用示例
  - 参考项目 typedoc-custom-theme-demo

## 1.2.4
- 增加 WGS84 坐标系转换为 3857 坐标系
## 1.2.3
- geo.calculateCentroid 兼容 MultiPolygon

## 1.2.2
- isNumber 增加数字边界判断


## 1.2.0
- 增加 groupArray, convert3857ToWGS84, appendCentroid, calculateCentroid, genList, fmtNumber

## 1.1.1
- fix isNumber 判断漏洞
## 1.1.0
- 添加 start.ts 作为启动脚本
- 添加 number.ts 数据处理函数， 包括 percent|isNumber|toFixed|randomNum|fmtNumber

## 1.0.2
- [x] 添加 getDomScale 获取当前 dom 的真实 scale， 返回 { x: scaleX, y: scaleY }
- [x] sinon.useFakeTimers 改写 promiseQueue 单测
- [x] gh-page 通过 GitHub action 自动发布

## 1.0.0
- [x] 用 ts 重写
# 0.4.4
- ts doc theme 替换