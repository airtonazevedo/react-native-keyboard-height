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

Import the package with  `import keyboardCallback, { useKeyboard } from "react-native-keyboard-height"`<br />
Use the hook witch `const [keyboardHeight] = useKeyboard();`

```js
import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, TextInput } from 'react-native'
import keyboardCallback, { useKeyboard } from 'react-native-keyboard-height'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function exampleKeyboardHeight() {

    const [keyboardHeigth] = useKeyboard();
    const [viewHeight, setViewHeight] = useState(screenHeight)

    /*
    It is best to use the didShow and didHide events to manipulate the component, 
    because they are executed before the keyboardHeight updates
    */

    keyboardCallback.didShow = (height) => {
        console.log('Keyboard show - Height: ' + height )
        setViewHeight(screenHeight - height)
    }

    keyboardCallback.didHide = () => {
        console.log('Keyboard hide');
        setViewHeight(screenHeight);

    }

    useEffect(() => {
        console.log(keyboardHeigth);
    }, [keyboardHeigth])

    return (
        <View style={{
            width: screenWidth,
            height: screenHeight - keyboardHeigth /* or viewHeight*/,
            backgroundColor: '#bbb',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>{"The keyboard height is: " + keyboardHeigth}</Text>
            <TextInput
                style={{
                    height: 40,
                    width: '90%',
                    backgroundColor: '#fff'
                }}
            />
        </View  >
    );
};
```


## License

ISC
