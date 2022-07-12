---
sidebar_position: 2
---

# API

## detect imToken DApp browser

Detect imToken DApp browser by `!!window.imToken` or `window.ethereum.isImToken`, it will return true if the current browser is imToken DApp browser.

## callAPI ([demo](https://simple-demo.vercel.app/) for showcase)

`imToken.callAPI(apiName, options, callback)`

| Params   | Type     | Description                           |
| -------- | -------- | ------------------------------------- |
| apiName  | string   | name of the method                    |
| options  | object   | options depend on the specific method |
| callback | function | callback of method                    |

Example usage:

```
imToken.callAPI(apiName, params, (error, result) => {
  if (error) {
    alert(error.message);
  } else {
    alert(result);
  }
});
```

If you want to call API with Promise style, you can use `callPromisifyAPI`.

Example usage:

```
imToken
  .callPromisifyAPI(apiName, params)
  .then((result) => alert(result))
  .catch((error) => {
    alert(error.message);
  });
```

## API info

### general

### navigator

### device

### layout

### native

### user

### internal

## Debug Tool

There is an [demo](https://simple-demo.vercel.app/) to help you debug.
You can open this demo with your mobile device to check the API usage.
