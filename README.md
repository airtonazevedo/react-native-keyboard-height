# react-native-keyboard-height

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [License](#license)

## Install

```bash
npm install react-native-keyboard-height
```
or
```bash
yarn add react-native-keyboard-height
```


## Usage

Import the package with  `import { useKeyboard } from "react-native-keyboard-height"`<br />
Use the hook witch `const [keyboardHeight] = useKeyboard(didShow, didHide);`

### Example

```js
import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, TextInput } from 'react-native'
import { useKeyboard } from './index' /* import this */

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function exampleKeyboardHeight() {

    const didShow = (height) => {
        console.log('Keyboard show. Height is ' + height)
        setViewHeight(screenHeight - height)
    }

    const didHide = () => {
        console.log('Keyboard hide');
        setViewHeight(screenHeight);
    }

    const [keyboardHeigth] = useKeyboard(didShow, didHide); /* initialize the hook (optional parameters) */

    const [viewHeight, setViewHeight] = useState(screenHeight) /* for example with didShow and didHide */

    useEffect(() => {
        console.log(keyboardHeigth);
    }, [keyboardHeigth])

    /* 
    to call methods it is better to use the didShow and didHide functions than 
    useEffect(()=>{ some code }, [keyboardHeight])
    */

    return (
        <View style={{
            width: screenWidth,
            height: screenHeight - keyboardHeigth, /* or viewHeight */
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>{"The keyboard height is: " + keyboardHeigth}</Text>
            <TextInput
                placeholder = { 'Text input' }
                style={{
                    height: 40,
                    width: '90%',
                    backgroundColor: '#ddd',
                    paddingHorizontal: 20
                }}
            />
        </View  >
    );
};
```


## License

ISC
