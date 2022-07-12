---
sidebar_position: 5
---

# Deeplink

Open a specific DApp page via deeplink.

## How to use

DeepLink usage code is consisted of a fixed prefix and path, you can specify the pathname:

```
imtokenv2://navigate/AssetsTab
// prefix: imtokenv2://navigate/
// path: AssetsTab
```

Example usage:

```
imtokenv2://navigate?screen=DappView&url=https://token.im
```

For web dApp, the example usage

```
<a href="imtokenv2://navigate/AssetsTab">Go to imToken App</a>
```

If your DApp link contains characters that need to be parsed, serialize the query parameter:

Example usage:

```
// imtokenv2://navigate/DappView?url=https://domain/path//\\-name
// should be:
imtokenv2://navigate/DappView?url=https%3A%2F%2Fdomain%2Fpath%2F%2F%5C-name
```

## Debug tool

There is a [tool](https://token-deeplink.vercel.app/) to help you debug.
You can open the tool with your mobile device to check the DeepLink usage.
