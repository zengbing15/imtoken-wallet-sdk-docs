---
sidebar_position: 2
---

# Developement Guide

## Integrate with imToken DApp Browser

With the imToken Webview `@consenlabs-fe/webview`, the DApp side can use features that built in the imToken DApp Browser, such as integrating with imToken Wallet DApp Browser or adapting the DApp application. You can refer to [API](/function/API) for more usage.

### System Requirements

- Operating System: imToken Webview can be developed on all major platforms, including Linux, Windows, and macOS.
- JavaScript runtime environment: Node.js LTS Version (>=12)
- JavaScript package manager: Yarn or npm

### Install imToken Webview

```
$ npm i @consenlabs-fe/webview
or
$ yarn add @consenlabs-fe/webview
```

`@consenlabs-fe/webview` is also available on [unpkg](https://unpkg.com/@consenlabs-fe/webview/dist/index.js) and [jsdelivr](https://cdn.jsdelivr.net/npm/@consenlabs-fe/webview/dist/index.min.js).

```javascript title="CDN"
<script src="https://cdn.jsdelivr.net/npm/@consenlabs-fe/webview/dist/index.min.js" />
```

### Usage

#### Import

```
import TokenWebView from '@consenlabs-fe/webview'
```

#### Check the current usage environment

```
if (TokenWebView.isTokenEnv()) {
  TokenWebView.apis.navigator.setTitle('hello world')
}
```

## Debug Tool

There is a [demo](https://webview-demo.vercel.app/) to help you debug. You can open this demo on your mobile device to check the API usage.

## Breaking Change

### No Longer Injecting web3.js

Since 2021 ,imToken Wallet have no longer inject `web3.js`.The DApp should package the library by itself.You can refer to [this article](https://medium.com/metamask/no-longer-injecting-web3-js-4a899ad6e59e) for more details.

### No longer adding fixed patch for web3.js send errors

There is a bug in web3.js version 1.3.0 ,which is the `send` function cannot be found([issue#3790](https://github.com/ChainSafe/web3.js/issues/3790), [PR#3649](https://github.com/ChainSafe/web3.js/pull/3649#issuecomment-695200876)). The error log:

```
Uncaught (in promise) TypeError: this.send is not a function
// or
TypeError: this._eip1193Send is not a function. (In 'this._eip1193Send(payload.method, payload.params)', 'this._eip1193Send' is undefined)
```

Because of some side effects, since imToken Wallet v2.9.4, the fixed patch has no longer been applied. It is recommended that upgrade `web3.js` to fix this bug.
