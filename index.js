import { useEffect, useState } from 'react';
import { Keyboard, KeyboardEvent } from 'react-native';


export const useKeyboard = (didShow: (keyboardHeight :number) => void, didHide: () => void): [number] => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const onKeyboardDidShow = (e) => {
    setKeyboardHeight(e.endCoordinates.height);
    if (typeof didShow === "function") {
      didShow(e.endCoordinates.height);
    }
  }

  const onKeyboardDidHide = () => {
    setKeyboardHeight(0);
    if (typeof didHide === "function") {
      didHide(0);
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
