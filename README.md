# team-51-fe-convention

51.ca FE team JavaScript convention

## Content

1. [Introduction](#1introduction)
2. [Source file basics](#2source-file-basics)
3. [Formatting](#3formatting)
4. [Naming](#4naming)
5. [Commment](#5comment)
6. [Lint Tools](#6lint-tools)

## 1.Introduction

本文档用于定义 51.CA 前端团队 JavaScript 源代码的代码规范. 包含了:

- 命名规范
- 代码格式
- 函数及方法规范
- etc

## 2.Source file basics

### 2.1 File name

1. Extension:

- Vanilla JavaScript: `.js`
- React JSX: `.jsx`
- Vue: `.vue`

2. Naming:

- General directory: `lowerCamelCase 小驼峰`
- Vanilla JavaScript: `lowerCamelCase.js`
- React JSX: `CamelCase.jsx 大驼峰`
- React JSX directory: _CamelCase.jsx_ 大驼峰

```
  - MyComponent
  |- index.js
  |- MyComponent.jsx
  |- MyComponent2.jsx
```

- Vue: _camelCase.vue_

### 2.2 File encoding: UTF-8

### 2.3 JavaScript Modules

- 优先使用 ES6 Module: `import` / `export`
- 如果没有特殊情况 Module name 必须匹配文件名, e.g:

```js
// good:
import myFunc from 'some/package/myFunc';

// bad:
import randomName from 'some/package/myFunc';

// good:
const myModule = require('package/path/myModule.js');

// bad:
const someName = require('package/path/myModule.js');
```

### 2.4 JavaScript Modules implementation

依赖引入和具体调用  之间必须有一行空行, e.g:

```js
// good:
import myFunc from 'some/package/myFunc';

myFucn();

// bad:
import myFunc from 'some/package/myFunc';
myFunc();
```

[Back to Content](#content)

## 3.Formatting

JavaScript 代码格式为 airbnb 规范  基础上自定义版本

### 3.1 缩进及空格

#### 3.1.1 代码块缩进

必须是: 2-space indentation

#### 3.1.2 操作符空格

- 单目运算符  不加空格
- 双目运算符  以及赋值  操作符  左右各需空格

```js
// good:
for (let i = 0; i < 5; i++) {
  doSomeThing();
}

const someThing = shouldDo ? shouldDo : null;
```

### 3.2 字符串操作

#### 3.2.1 引号

字符串一般情况必须使用  单引号

```js
const myStr = 'some string';
```

#### 3.2.2 字符串拼接

优先使用 es6 string template

```js
const myStr1 = 'string1';
const myStr2 = 'string2';
const combineStr = `${myStr1}${myStr2}`;
```

### 3.3 statement 结束必须使用分号

```js
// good
const myStr1 = 'string1';

// bad
const myStr1 = 'string1';
```

### 3.4 变量声明

必须使用 ES6 标准的声明, 不使用`var`

```js
// good:
let aNumber = 1;
const noChange = 'someThing';

// bad
var someValue = 111;
```

### 3.5 流程控制都必须带 _{ }_

```js
// good
if (someCondition) {
  doSomeThing();
}

// bad
if (someCondition) doSomeThing();
```

#### Exception:

```js
if (someCondition) return;
```

### 3.6 箭头函数不可省略括号

```js
// good
const myFunc = (arg) => {
  return arg;
};
// bad
```

[Back to Content](#content)

## 4.Naming

### 4.1 变量以及函数命名

- 符合小驼峰, 或者是 \_\_\_ 开头
- 必须是有意义的, 可阅读的英文，反对掺杂汉语拼音命名

```js
// good:
const defaultImagePath = 'path/to/image.jpg';

const fetchData = (query) => {
  // do ajax or something...
};

// bad:
const morentu = 'path/to/image.jpg';

const abc = (query) => {
  // do ajax or something...
};
```

### 4.2 Class 命名

- 类名使用大驼峰

```js
class MyClass extends BaseClass {
  // declare things...
}
```

[Back to Content](#content)

## 5.Comment

```js
/**
 * 多行
 */

// 单行
```

### Functions or Mehtods 都需要加上注释

```js
/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {}
```

[Back to Content](#content)

## 6.Lint Tools

为了帮助代码风格规范化，我们使用了一些规范化工具:

- 编辑器配置: editorconfig
- Ecma标准代码规范: eslint
- 自动格式化: prettier
- css代码规范: stylelint

可在 src 目录中下载配置文件
