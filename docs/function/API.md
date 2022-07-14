---
sidebar_position: 2
---

# API

The function of imToken Webview API includes obtain the language environment, common native UI, route navigation, scan QR codes, etc.


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

Check the environment and processing of generic scenarios.

#### isTokenEnv

Check if the current context is imToken WebView and return a boolean value.

```
type isTokenEnv = () => boolean
```

#### getVersion

Get the current version of the imToken App.

```
type getVersion = () => string
```

#### isGreaterThanOrEqualVersion

The current App version is greater than or equal to the specified value.

```
type isGreaterThanOrEqualVersion = (version: string) => boolean
```

#### compareSemver

Compare the two versions of the value and return the number.

```
type compareSemver = (versionA: string, versionB: string) => number
```

### navigator

`TokenWebView.apis.navigator`: Route navigation and settings page.

#### setTitle

Dynamically set dapp title. Have no effect on `document.title`.

```javascript title="/webview/apis/navigator.ts"
setTitle: (title: string) => {
    callAPI('navigator.setTitle', title)
  },
```

#### getOrientation

Set screen Orientation.

```javascript title="/webview/apis/navigator.ts"
 setOrientation: (orientation: Orientation): void => {
    callAPI('navigator.setOrientation', `${orientation}`.toLowerCase())
  },
```

#### closeDapp

Close the current web app.

```javascript title="/webview/apis/navigator.ts"
 closeDapp: (): void => {
    callAPI('navigator.closeDapp')
  },
```

#### goBack

Return to the previous level of routing, or closes the app if there is no routing stack.

```javascript title="/webview/apis/navigator.ts"
goBack: (): void => {
    callAPI('navigator.goBack')
  },
```

#### routeTo

Navigate to a special screen.

```javascript title="/webview/apis/navigator.ts"
routeTo: ({ screen, props }: { screen: string; props: ScreenProps }): void => {
    callAPI('navigator.routeTo', {
      screen: screen,
      passProps: props,
    })
  },
```

#### toggleNavbar

Hide Navbar manually.

```javascript title="/webview/apis/navigator.ts"
toggleNavbar: (): void => {
    callAPI('navigator.toggleNavbar')
  },
```

### device

Get the user's current language setting and currency setting.

#### getCurrentCurrency

Get currency from user settings, e.g. "CNY".

```javascript title="/webview/apis/device.ts"
  getCurrentCurrency: (): Promise<string> => {
    return new Promise((resolve, reject) => {
      callAPI('device.getCurrentCurrency', (err: Error, currency: string) => {
        if (err) return reject(err)
        resolve(currency)
      })
    })
  },
```

#### getCurrentLanguage

Get the current language, e.g. "en-us".

```javascript title="/webview/apis/device.ts"
getCurrentLanguage: (): Promise<string> => {
    return new Promise((resolve, reject) => {
      callAPI('device.getCurrentLanguage', (err: Error, language: string) => {
        if (err) return reject(err)
        resolve(language)
      })
    })
  },
```

### layout

Set the frame layout style.

```javascript title="/webview/apis/layout.ts"
type HexColor = `#${string}`
type StatusBarStyle = 0 | 1 | 2

type WebViewLayoutOptions = {
  background?: HexColor | Array<HexColor>
  foreground?: HexColor
  isTitleLeft?: boolean
  titleSize?: number
  isTransparent?: boolean
  transparentScrollY?: number
  loadingBackground?: HexColor
  loadingForeground?: HexColor
  bodyBackground?: HexColor
  bodyForeground?: HexColor
  statusBarStyle?: StatusBarStyle
}

type setOptions = (options: WebViewLayoutOptions) => void
```

Example usage:

```
TokenWebView.apis.layout.setOptions({
  background: '#000000',
  titleSize: 20,
})
```

### native

#### alert

Call the native component, UI effects depend on the platform.

```javascript title="/webview/apis/native.ts"
  alert: (content: string): void => {
    callAPI('native.alert', content)
  },
```

#### confirm

Displays a native confirm dialog.

```javascript title="/webview/apis/native.ts"
confirm: (params: ConfirmParams): Promise<boolean> => {
    return new Promise(resolve => {
      callAPI('native.confirm', params, (err: Error) => {
        if (err) return resolve(false)
        resolve(true)
      })
    })
  },
```

#### setLoading

Set loading status. the loading layer blocks all events from user.

```javascript title="/webview/apis/native.ts"
setLoading: (visible: boolean): void => {
    const method = visible ? 'showLoading' : 'hideLoading'
    callAPI(`native.${method}`)
  },
```

#### share

Share image or url address.

```javascript title="/webview/apis/native.ts"
share: (params: ShareParams): Promise<OpenReturn> => {
    const input = !params.image
      ? params
      : {
          title: params.title,
          url: params.image,
          type: 'image/png',
        }
    return new Promise((resolve, reject) => {
      callAPI('native.share', input, (err: Error, ret: OpenReturn) => {
        if (err) return reject(err)
        resolve(ret)
      })
    })
  },
```

#### scanQRCode

Scan a QRCode and returns string content of the QRCode.

```javascript title="/webview/apis/native.ts"
scanQRCode: (): Promise<string> => {
    return new Promise((resolve, reject) => {
      callAPI('native.scanQRCode', (err: Error, text: string) => {
        if (err) return reject(err)
        resolve(text)
      })
    })
  },
```

#### setClipboard

Set the user's clipboard.

```javascript title="/webview/apis/native.ts"
setClipboard: (text: string): void => {
    callAPI('native.setClipboard', text)
  },
```

### user

Switch the user wallet and return wallet address.

```javascript title="/webview/apis/user.ts"
type ChainType =
  | "ETHEREUM"
  | "BITCOIN"
  | "LITECOIN"
  | "EOS"
  | "COSMOS"
  | "TRON"
  | "BITCOINCASH"
  | "NERVOS"
  | "KUSAMA"
  | "POLKADOT"
  | "FILECOIN";

type showAccountSwitch = (chainType: ChainType | null) => Promise<string>;
```

Example usage:

```
const address = await TokenWebView.apis.user.showAccountSwitch('ETHEREUM')
console.log(address)

// output -> '0x...'
```

### internal

The Internal API is unstable and only for debugging. Please refer to `/webview/apis/internal.ts` for more details.

## Debug Tool

There is a [demo](https://simple-demo.vercel.app/) to help you debug.
You can open this demo with your mobile device to check the API usage.
