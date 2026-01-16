# TODO
- [ ] 修改 typedoc-theme 将测试用例作为函数使用示例
  - 参考项目 typedoc-custom-theme-demo
## 1.3.3
- 增强fmtNumber函数支持小数位参数
- 新增numberToThree函数
## 1.3.2
- 新增生成扇形 geojson 函数 *createSector*
```js
const geojson = createSector([-0.06, 0.01], 0.1, 0, 45);
```

## 1.3.1
- 新增重试函数
```js
// 使用示例：
await retry(() => fetch('/api/data').then(r => r.json()));
await retry(() => axios.get('/api/users'), {
  retries: 2,
  delay: 100,
  // 是否使用指数退避(默认false)，每次重试后延迟时间增加一倍
  exponential: true,
  onRetry: () => {}
});
await retry(() => someAsyncFunction());
```

## 1.3.0
- 新增地理坐标计算：
  - getDistanceByLatlng 计算两点直接的直线距离， 单位 m
  - createCircle 生成圆形坐标点（GeoJSON Polygon）
  - calculateRadiusEnd 根据起点、半径、角度 计算终点坐标
  - createSquare 根据中心点和半径创建一个正方形
## 1.2.7
- getIdxByRange
```
/**
 * 获取数据分界线 idx
 * @param {number[]} list 分界线
 * @param {number} num 当前要比较的值
 * @returns {number}
 * @eg
 *    const colors = ['red', 'yellow', 'blue'];
 *    const idx = getIndexByRange([100, 80, 60], 70)
 *    const color = colors[idx] // 蓝色
 *
 *    num > 100 return 0
 *    80 < num <= 100 return 1
 *    60 < num <= 80 return 2
 *    <= 60 return -1
 */
```
## 1.2.5
- 增加 jsonp 请求
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