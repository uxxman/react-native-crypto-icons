# react-native-crypto-icons

# [![NPM](https://nodei.co/npm/react-native-crypto-icons.png)](https://npmjs.org/package/react-native-crypto-icons)


Crypto Currency Icons for React Native.


# Installation

### Using npm
`npm i --save react-native-crypto-icons`

### Using yarn

`yarn add react-native-crypto-icons`

# Adding Font File

### Manually

[Adding Custom Fonts to A React Native Application for IOS](https://medium.com/@dabit3/adding-custom-fonts-to-react-native-b266b41bff7f)

[Adding Custom Fonts to A React Native Application for Android](https://medium.com/@gattermeier/custom-fonts-in-react-native-for-android-b8a331a7d2a7)

### Automatically

`react-native link react-native-crypto-icons`

**Note:** There is no Java/ObjectiveC/swift binaries added using this command, it simply adds the font file to your android and ios projects.



# Usage
```javascript
import CryptoIcon from 'react-native-crypto-icons';

<CryptoIcon name='ada' style={{ fontSize: 45, color: 'green' }} />

```

# Props
| prop | required | type | description |
| ---- | ---- | ----| ---- |
| name | Yes | string | Icon name based on symbol (e.g. btc for Bitcoin, ada for Cardano) |


# MIT License

Copyright (c) 2017 Muhammad Usman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
