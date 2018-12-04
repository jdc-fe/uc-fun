# functions

## 介绍
- 京东城市前端工具函数库

## 开发
### clone项目
- `git clone http://git.jd.com/web-uc-weapons/uc-fun.git`
- `cd uc-fun`
- `npm install`

### 开发一个feature
- `git checkout -b feature-<feature name>`
- coding
- `npm run test`
- `git push origin feature-<feature name>`
- 提交 merge request
- merge to master

### 单测覆盖率
- functions = 100%
- branches > 90%
- lines > 90%

### 附录
- 单测：
  - 测试框架 `https://mochajs.org/`
  - 断言库 `https://github.com/power-assert-js/power-assert`
  - 测试覆盖率 `https://github.com/istanbuljs/nyc`
  - 模块调试 `https://github.com/atian25/blog/issues/17 `
  - Airbnb JavaScript 风格指南 `https://github.com/lin-123/javascript `
  - 命名规则规范 `https://cn.vuejs.org/v2/style-guide/index.html#优先级-B-的规则：强烈推荐-增强可读性 `
  - sinon `https://sinonjs.org/ `


## 使用
- `npm install -S git+http://git.jd.com/web-uc-weapons/uc-fun.git`
- `npm install babel-plugin-transform-imports --save-dev `
-  .babelrc plugin参数增加配置项
```
  [
      "transform-imports",
      {
        "uc-fun": {
          "transform": "uc-fun/src/${member}",
          "preventFullImport": true
        }
      }
    ]
```
- `import { timeFormat } from 'uc-fun'; `


## 用法


## 环境
### 开发环境
- node `v10.8.0`

### 运行环境
- 所有支持es5的主流浏览器下
