---
sidebar_position: 3
---

# Support WalletConnect

You can connect imToken Wallet through [WalletConnect](https://walletconnect.com/).

The standard Wallet Connect URI:

```
wc:00e46b69-d0cc-4b3e-b6a2-cee442f97188@1?bridge=https%3A%2F%2Fbridge.walletconnect.org&key=91303dedf64285cbbaf9120f6e9d160a5c8aa3deb67017a3874cd272323f48ae
```

You can add prefix `imtokenv2://wc?uri= `

```
imtokenv2://wc?uri=wc:00e46b69-d0cc-4b3e-b6a2-cee442f97188@1?bridge=https%3A%2F%2Fbridge.walletconnect.org&key=91303dedf64285cbbaf9120f6e9d160a5c8aa3deb67017a3874cd272323f48ae
```

For customizing the Schema, please refer to [Protocol Standards documentation](https://docs.walletconnect.com/tech-spec#requesting-connection).
