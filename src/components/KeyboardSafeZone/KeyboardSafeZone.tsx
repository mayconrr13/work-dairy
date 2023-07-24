import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { KeyboardSafeZoneProps } from './types';
import React from 'react';

const KeyboardSafeZone = ({ children }: KeyboardSafeZoneProps) => {
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={false}
      contentContainerStyle={{
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
      }}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};

export default KeyboardSafeZone;
