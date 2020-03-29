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
Use the hook witch `const [keyboardHeight] = useKeyboard();`

```js
import React, { useEffect } from 'react';
import { View, Dimensions, Text, TextInput } from 'react-native'
import { useKeyboard } from 'react-native-keyboard-height'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function exampleKeyboardHeight() {

    const [keyboardHeigth] = useKeyboard();

    useEffect(() => {
        console.log(keyboardHeigth);
    }, [keyboardHeigth])

    return (
        <View style={{
            width: screenWidth,
            height: screenHeight - keyboardHeigth,
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
