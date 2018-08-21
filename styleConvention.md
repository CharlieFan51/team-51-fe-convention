# 51.CA CSS code style:

## Index:

- [1.General Formatting Rules](#1general-formatting-rules)
- [2.Coding Style Rules](#2coding-style-rules)
- [3.Comments](#3comments)

## 1.General Formatting Rules

### 1.1 Indentation

使用 2-space 缩进

### 1.2 Captialization

使用全小写

```css
/** good */
body {
  color: #ff6600;
}

/** bad */
body {
  color: #ff6600;
}
```

### 1.3 Encoding

使用 UTF-8

## 2.Coding Style Rules

### 2.1 ID & Class Naming

使用有意义的命名, 最好是能体现出 id / class 的使用目的, 模块, 或者父子关系等具有较强可阅读性的名称
e.g.

```css
/** bad */
#a {
}

.box-a {
}

/** good */
#app-root {}

#gallery {}

.clear-fix {}

.news-box {}
```

### 2.2 Type Selectors

使用 class 或者 id, 不要元素名配合 class, e.g.

```css
/** bad */
div.error {}

/** good */
.error {}
```

P.S 在SPA中不要使用id selector rule, 因为SPA通常id是react/vue的插入点

### 2.3 Shorthand Properties

优先使用 shorthand properties 因为可以增加可读性,同时减少代码行数,e.g.

```css
/** bad */
margin-top: 0;
margin-left: 1rem;
margin-right: 2rem;
margin-bottom: 1rem;

/** good */
margin: 0 2rem 1rem 1rem;
```

### 2.3 Value 0 and Units

值为 0 的属性可以不带单位, 小数点前的 0 不可以省略, e.g.

```css
font-size: 0.625rem;

margin: 0 0.5rem;
```

### 2.4 ID and Class Name Delimiters:

多词组的 id 或 class名使用`-`分开, e.g.

```css
/** bad */
.demobutton {}

/** good */
.demo-button {}

#app-root {}
```

### 2.5 Semicolon:

`;`分号不可省略,即便是 block 最后一句声明也不可以

### 2.6 Property 赋值:

声明 property 值时冒号后面必须加空格

```css
/** bad */
h3 {
  font-size: 12px;
}

/** good */
h3 {
  font-size: 12px;
}
```

### 2.7 Declare Block Separation:

声明块和 selector 之间要有空格,块与块之间有一行空行, e.g.

```css
/** bad */
.main-content {
  width: 100%;
}
.main-content h3 {
  color: #2aaeff;
}

/** good */
.main-content {
  width: 100%;
}

.main-content h3 {
  color: #2aaeff;
}
```

### 2.8 Selector Separation

多个 selector 使用同一套 css, selector 需要换行

```css
/** bad */
h1,
h2,
h3 {
  color: #2aaeff;
}

/** good */
h1,
h2,
h3 {
  color: #2aaeff;
}

.blog-content,
.post-content {
  max-width: 768px;
}
```

### 2.9 Quotation:

引号一律使用双引号 `""`, 并且`url()`内不使用引号, e.g.

```css
/** bad */
@import url('https://url/to/some/css.css');

html {
  font-family: 'Roboto';
}

/** good */
@import url(https://url/to/some/css.css);

html {
  font-family: 'Roboto';
}
```

### 2.10 Declaration Order:

声明顺序总体思路为：显示->尺寸->背景->颜色->字体:

具体顺序自上而下按照如下配置, 由 stylelint 进行规范化：

```js
[
  'display',
  'float',
  'position',
  {
    order: 'flexible',
    properties: ['left', 'top', 'right', 'bottom']
  },
  'width',
  'height',
  {
    order: 'flexible',
    properties: [
      'min-width',
      'max-width',
      'min-height',
      'max-height',
      'line-height'
    ]
  },
  'padding',
  {
    order: 'flexible',
    properties: [
      'padding-left',
      'padding-top',
      'padding-right',
      'padding-bottom'
    ]
  },
  'margin',
  {
    order: 'flexible',
    properties: ['margin-left', 'margin-top', 'margin-right', 'margin-bottom']
  },
  'border',
  {
    order: 'flexible',
    properties: [
      'border-left',
      'border-top',
      'border-right',
      'border-bottom',
      'border-radius'
    ]
  },
  'background',
  {
    order: 'flexible',
    properties: [
      'background-image',
      'background-position',
      'background-repeat',
      'background-size',
      'background-color'
    ]
  },
  'color',
  {
    order: 'flexible',
    properties: ['font-weight', 'font-size']
  },
  {
    order: 'flexible',
    properties: ['text-align']
  }
];
```

### 3.Comments

推荐每一个模块都写上注释标记样式用途,以便维护注释与 css 之间留有一行空行,e.g

```css
/* Header styles here: */

.general-header {
}

/* Footer styles here */

.foot-51 {
}
```
