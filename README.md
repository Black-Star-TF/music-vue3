### 项目搭建过程

#### .editconfig文件


### 配置eslint

```cmd
npm i eslint -D

# ./node_modules/.bin/eslint --init
npm init @eslint/config
```
遇到问题： 

- error  Parsing error: '>' expected

.eslintrc.js文件中
```js
'parser': 'vue-eslint-parser',
'parserOptions': {
	'parser': '@typescript-eslint/parser',
},
```

- Don't use `{}` as a type. `{}` actually means "any non-nullish value".

```js
"rules": {
	"@typescript-eslint/ban-types": [
		"error",
		{
			"extendDefaults": true,
			"types": {
				"{}": false
			}
		}
	]
}
```

### 配置prettier

```
npm i prettier -D
```

添加.prettierrc.js文件

```js
module.exports = {
  printWidth: 80, // 单行输出（不折行）的（最大）长度
  tabWidth: 4, // 每个缩进级别的空格数
  tabs: true, // 使用制表符 (tab) 缩进行而不是空格 (space)。
  semi: false, // 是否在语句末尾打印分号
  singleQuote: true, // 是否使用单引号
  quoteProps: "as-needed", // 仅在需要时在对象属性周围添加引号
  jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
  trailingComma: "always", // 去除对象最末尾元素跟随的逗号
  bracketSpacing: true, // 是否在对象属性添加空格
  jsxBracketSameLine: true, // 将 > 多行 JSX 元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭元素）,默认false,这里选择>不另起一行
  arrowParens: "always", // 箭头函数，只有一个参数的时候，也需要括号
  proseWrap: "always", // 当超出print width（上面有这个参数）时就折行
  htmlWhitespaceSensitivity: "ignore", // 指定 HTML 文件的全局空白区域敏感度, "ignore" - 空格被认为是不敏感的
  vueIndentScriptAndStyle: true, // 在VUE文件中不要缩进脚本和样式标记
  stylelintIntegration: true,
  endOfLine: "auto"
}
```


### 解决eslint与prettier的冲突

```
npm i eslint-config-prettier eslint-plugin-prettier -D
```

eslint添加extends配置"plugin:prettier/recommended"
```js
'extends': [
	'eslint:recommended',
	'plugin:vue/vue3-essential',
	'plugin:@typescript-eslint/recommended',
	"plugin:prettier/recommended"
],
```


### Husky 和 Lint-staged 配置 Pre-commit 检查

```
npm i husky -D
npx husky install
npx husky add .husky/pre-commit "npm run lint"
```

当项目大的时候会遇到一些问题，比如每次 lint 是整个项目的文件，文件太多导致跑的时间过久，另外如果这个 lint 是在项目后期接入的话，可能 lint 命令会报很多错误，全量去改可能会有问题。

基于上面的痛点，lint-stadge 就出现了，它的解决方案就是只检查本次提交所修改(指 git 暂存区里的东西)的问题，这样每次 lint 量就比较小，而且是符合我们的需求的。

1. 安装lint-staged

```
npm i lint-staged -D
```

2. 修改package.json配置

```json
{
	"lint-staged": {
		"*.{js,jsx,vue,ts,tsx}": "npm run lint"
	}
}
```
2. 配置husky

```
npx husky add .husky/pre-commit "npx lint-staged"
```


最终pre-commit文件
```
. "$(dirname -- "$0")/_/husky.sh"

npm run lint
npx lint-staged
```

### sass

```
npm i sass -D
```

### 配置vue-router

```
npm i vue-router@4
```

### 状态管理pinia

```
npm i pinia
```