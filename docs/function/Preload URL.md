---
sidebar_position: 4
---

# Preload URL

Preload URL can refine the DApp loading page and provide a better user experience for DApps. It is only required a string at the end of the URL, for example, `https://token.im?hbg=000000`.Any preloading configuration will not slow down the DApp page rendering speed and all layout styles or other options will be resolved quickly before DNS parse.

:::note
imToken version >= 2.9.1 support the Preload URL function
:::

## Preload URL Options

You can use the URL Options tool[https://token-url.vercel.app/] to configure the URL Options.

### Header

All color values do not require hash tag (#) and default to hexadecimal values.

#### Background

Set the background color of header, supports gradient values.

```
# black
https://token.im?hbg=000000

# gradient y 0% -> y 100%
https://token.im?hbg=000000,333333
```

#### Foreground

Set the foreground color of header. The foreground color needs to should be different from the background color.

```
# red
https://token.im?hfg=ff0000
```

#### Title

Set the title of header. If you want to change the title of DApps, please use the API [`setTitle`](/webview-docs/function/API#settitle)

```
# on loading
https://token.im?title=loading
```

#### Title Left

Set the title to the left of header.

```
https://token.im?title_left=1
```

#### Title Size

Set the font size of header title.

```
https://token.im?title_size=12
```

#### Transparent

Set header to transparent.

```
https://token.im?trans=1
```

#### Offset Distance

Display the header after the page has scrolled a certain distance.This will only work if transparent is turned on.

```
https://token.im?trans=1&trans_y=150
```

### Loading Bar

#### Background

Set the background color of loading bar.

#### Foreground

Set the foreground color of loading bar.

```
https://token.im?lbg=697689&lfg=f47373
```

### Status Bar

#### Text Style

Set the text color of status bar.

- 0: default.
- 1: light style.
- 2: dark style.

```
https://token.im?sfg=1
```

#### Background

- For iOS: No background color.

* For Android: the same as [Header Background](/webview-docs/function/Preload%20URL#background).

### Body

It means the frame of the page's external container.

#### Background

Set the background color of the body content.

#### Foreground

Set the foreground color of the body content.

```
https://token.im?bbg=000000&bfg=f47373
```

## Debug Tool

The [URL Options tool](https://dapp-url-generator.vercel.app/) also can help you to debug.You can use this tool to quickly generate the URL options.
