# form-renderer

> Yet another form render solution for vue

[![NPM version](https://badgen.net/npm/v/form-renderer)](https://npmjs.com/package/form-renderer)
[![NPM download](https://badgen.net/npm/dm/form-renderer)](https://npmjs.com/package/form-renderer)
[![License](https://badgen.net/npm/license/form-renderer)](./LICENSE)
[![buy me a coffee](https://badgen.net/badge/buy%20me%20a/coffee/a71)](https://patreon.com/evillt)

## Getting started

You might want to run the `example` to see what it can do

```bash
# We assume that you have already installed the required dependencies.

# Build library
yarn build

# Run example
yarn example
```

## Config type check

FormRenderer expose the `Config` type you can use to type-check your form config:

```ts
// form-config.ts
import { Config } from 'form-renderer'

const config: Config = {
  props: {},
  items: [...]
}

export default config
```

It also works in `.js` file:

```js
/** @type {import('form-renderer').Config} */
const config = {
  props: {},
  items: [...]
}

export default config
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits

This repo(form-renderer) won't exist without the inspirations from following projects or articles:

- Form-renderer itself
- [@femessage/el-form-renderer](https://github.com/femessage/el-form-renderer)
- [elv-form](https://github.com/evillt/elv-form)
- [NoForm](https://github.com/alibaba/nopage/tree/master/packages/form) and [Article](https://zhuanlan.zhihu.com/p/44120143?utm_source=wechat_timeline&utm_medium=social&from=timeline)
- [再也不想写表单了](https://zhuanlan.zhihu.com/p/48241645)
- [Form 表单组件设计之路](https://zhuanlan.zhihu.com/p/56280821)
- [ncform](https://github.com/ncform/ncform)

## Author

**form-renderer** © [EVILLT](https://github.com/evillt), Released under the [MIT](./LICENSE) License.

Authored and maintained by **EVILLT** with help from contributors ([list](https://github.com/evillt/form-renderer/contributors)).

> [evila.me](https://evila.me) · GitHub [@evillt](https://github.com/evillt) · Twitter [@evillt](https://twitter.com/evillt)
