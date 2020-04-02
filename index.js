import { useEffect, useState } from 'react';
import { Keyboard, KeyboardEvent } from 'react-native';

export default keyboardCallback = {
  didShow: null,
  didHide: null
};

export const useKeyboard = (): [number] => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const onKeyboardDidShow = (e) => {
    setKeyboardHeight(e.endCoordinates.height);
    if (typeof keyboardCallback.didShow === "function") {
      keyboardCallback.didShow(e.endCoordinates.height);
    }
  }

  const onKeyboardDidHide = () => {
    setKeyboardHeight(0);
    if (typeof keyboardCallback.didHide === "function") {
      keyboardCallback.didHide(0);
    }
  }

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
    Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
    return () => {
      Keyboard.removeListener('keyboardDidShow', onKeyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', onKeyboardDidHide);
    };
  }, []);

  return [keyboardHeight];
};
