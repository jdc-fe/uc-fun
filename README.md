# functions

## 介绍
- 京东城市前端工具函数库

## 开发
### clone项目
- `git clone http://git.jd.com/domain/functions.git`
- `cd functions`
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


## 使用
- `npm install -S git+http://domain.git`
- `npm install babel-plugin-transform-imports --save-dev `
-  .babelrc plugin参数增加配置项
```
  [
      "transform-imports",
      {
        "uc-fun": {
          "transform": "uc-fun/lib/${member}",
          "preventFullImport": true
        }
      }
    ]
```


## 用法


## 环境
### 开发环境
- node `v10.8.0`

### 运行环境
- 所有支持es5的主流浏览器下
