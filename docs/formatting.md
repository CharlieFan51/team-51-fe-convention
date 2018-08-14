## 3 Formatting
JavaScript代码格式为airbnb规范基础上自定义版本

### 3.1 缩进及空格

#### 3.1.1 代码块缩进
必须是: 2-space indentation

#### 3.1.2 操作符空格
- 单目运算符不加空格
- 双目运算符以及赋值操作符左右各需空格
```js
// good:
for (let i = 0; i < 5; i++) {
  doSomeThing();
}

const someThing = shouldDo ? shouldDo : null;
```


### 3.2 字符串操作

#### 3.2.1 引号
字符串一般情况必须使用单引号
```js
  const myStr = 'some string';
```

#### 3.2.2 字符串拼接
优先使用es6 string template

```js
  const myStr1 = 'string1';
  const myStr2 = 'string2';
  const combineStr = `${myStr1}${myStr2}`;
```

### 3.3 statement结束必须使用分号

```js
    // good
    const myStr1 = 'string1';

    // bad
    const myStr1 = 'string1'
```

### 3.4 变量声明
必须使用ES6标准的声明, 不使用`var`

```js
// good:
let aNumber = 1;
const noChange = 'someThing';

// bad
var someValue = 111;
```

### 3.5 流程控制都必须带 *{ }*

```js
// good
if (someCondition) {
  doSomeThing();
}

// bad
if (someCondition)
  doSomeThing();
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
}
// bad
```

[Back to Content](../README.md)