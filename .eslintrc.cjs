/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true, // 根配置文件
  env: {
    node: true, // 运行环境为 Node.js
  },
  extends: [
    "plugin:vue/vue3-essential", // 使用 Vue 3 的基本规则
    "eslint:recommended", // 使用 ESLint 推荐的规则
    "plugin:prettier/recommended", // 集成 Prettier 的推荐规则
    './.eslintrc-auto-import.json', // unplugin-auto-import插件的配置和eslint报错解决
  ],
  parserOptions: {
    parser: "@babel/eslint-parser", // 使用 Babel 解析器
  },
  rules: {
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off", // 在生产环境禁用 debugger
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",   // 在生产环境禁用 console
    "space-before-function-paren": 0, // 函数定义括号前不需要空格
    "vue/require-default-prop": "off", // 不要求默认的 prop
    "vue/require-prop-types": "off", // 不要求 prop 的类型
    "generator-star-spacing": "off", // 禁用 generator 函数 * 后的空格警告
    "no-mixed-operators": 0, // 允许混合使用运算符
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 5, // Allow up to 5 attributes per line for single-line elements
        multiline: {
          max: 1, // Allow only 1 attribute per line for multi-line elements
          allowFirstLine: false,
        },
      },
    ],    
    "vue/attribute-hyphenation": 0, // 不强制属性使用连字符
    "vue/html-self-closing": 0, // 不强制自闭合标签
    "vue/component-name-in-template-casing": 0, // 组件名大小写不敏感
    "vue/html-closing-bracket-spacing": 0, // 不强制标签闭合前的空格
    "vue/singleline-html-element-content-newline": 0, // 单行元素内容不需要新行
    "vue/no-unused-components": 0, // 允许定义未使用的组件
    "vue/multiline-html-element-content-newline": 0, // 多行元素内容不需要新行
    "vue/no-use-v-if-with-v-for": 0, // 允许同时使用 v-if 和 v-for
    "vue/html-closing-bracket-newline": 0, // 标签闭合括号不需要新行
    "vue/no-parsing-error": 0, // 允许存在解析错误
    "no-tabs": 0, // 允许使用制表符
    quotes: [
      // 引号配置
      2,
      "single",
      {
        avoidEscape: true, // 避免转义
        allowTemplateLiterals: true, // 允许模板字符串
      },
    ],
    semi: [
      // 分号配置
      2,
      "never",
      {
        beforeStatementContinuationChars: "never",
      },
    ],
    "no-delete-var": 2, // 禁止删除变量
    "prefer-const": [
      // 建议使用 const
      2,
      {
        ignoreReadBeforeAssign: false,
      },
    ],
    "template-curly-spacing": "off", // 关闭模板字符串中花括号间的空格
    indent: "off", // 关闭缩进检查
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true, // 在测试文件中启用 Jest 环境
      },
    },
  ],
};

