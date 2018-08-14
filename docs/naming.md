## 4 Naming

### 4.1 变量以及函数命名
- 符合小驼峰, 或者是 *_* 开头
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
}
```

### 4.2 Class命名
- 类名使用大驼峰
```js
class MyClass extends BaseClass {
  // declare things...
}
```

[Back to Content](../README.md)
