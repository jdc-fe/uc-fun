# functions

## 介绍
- 京东城市前端工具函数库

## 开发
### clone项目
- `git clone https://github.com/jdc-fe/uc-fun`
- `cd uc-fun`
- `npm install`

### 开发一个feature
- `git checkout -b feature-<feature name>`
- coding
- `npm run test`
- `git push origin feature-<feature name>`
- 提交 merge request
- merge to dev
- 审核通过后， 修改 package.json version
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
- `npm install -S uc-fun`
- `npm install babel-plugin-transform-imports --save-dev `
-  .babelrc plugin参数增加配置项
    ```json
    {
      // package.json
      "babel": {
        "plugins": [
          ["transform-imports",
            {
              "uc-fun": {
                "transform": "uc-fun/src/${member}",
                "preventFullImport": true
              }
            }
          ]
        ]
      }
    }
    ```
- .eslintrc 配置。 当引入 uc-fun eslint报错的时候配置以下两行
    ```json
    {
      // ...
      rules: {
        // ...
        "import/no-unresolved": "off",
        "import/extensions": "off",
      }
    }
    ```
- `import { timeFormat } from 'uc-fun'; `

## 环境
### 开发环境
- node `v10.8.0`

### 运行环境
- 所有支持es5的主流浏览器下

## FEATURE_LIST
- 0.4.3
  - 添加部署命令，支持自动部署文档，node_module
- 0.4.0
  - 添加 linearScale 线型比例尺； eg: linearScale([0, 100], [0, 10])(10) = 1