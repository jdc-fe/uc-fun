# uc-fun

> 工具函数库

## USAGE
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
                "transform": "uc-fun/lib/${member}",
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

## CONTRIBUTION

### Scripts
- pnpm install
- npm start 本地开发启动
- npm test 测试
- npm run docs 生成文档
- npm run build 构建
- npm publish 发布

### Quick Start
- src 写函数逻辑
- test 中是单测逻辑， 写完执行 npm test

## REFERENCE
- `[ts]+[mocha]+[powser-assert]` https://github.com/power-assert-js/espower-typescript
- [typedoc](https://typedoc.org/guides/overview/)
