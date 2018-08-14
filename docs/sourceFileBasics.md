## 2 Source file basics

### 2.1 File name

1. Extension:
- Vanilla JavaScript: `.js`
- React JSX: `.jsx`
- Vue: `.vue`

2. Naming:
- General directory: `lowerCamelCase 小驼峰`
- Vanilla JavaScript: `lowerCamelCase.js`
- React JSX: `CamelCase.jsx 大驼峰`
- React JSX directory: *CamelCase.jsx* 大驼峰
    
    ```
        - MyComponent
        |- index.js
        |- MyComponent.jsx
        |- MyComponent2.jsx
    ```
- Vue: *camelCase.vue*

### 2.2 Filte encoding: UTF-8

### 2.3 JavaScript Modules
- 优先使用ES6 Module: ```import``` / ```export```
- 如果没有特殊情况Module name必须匹配文件名, e.g:

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

依赖引入和具体调用之间必须有一行空行, e.g:

```js
// good:
import myFunc from 'some/package/myFunc';

myFucn();

// bad:
import myFunc from 'some/package/myFunc';
myFunc();
```

[Back to Content](../README.md)
