import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from '../../../common/components/Button';
import NativeLocalStorage from '../../../common/specs/NativeLocalStorage';
import { ScreenBaseProps } from '../../../common/types/ScreenBaseProps';

export const TurboModuleScreen: React.FC<ScreenBaseProps> = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const [valueFromTurboModule, setValueFromTurboModule] = useState('');

  const incrementCount = () => {
    setCount(count + 1);
    NativeLocalStorage?.setItem(`${count + 1}`, 'count');
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const getValueFromTurboModule = () => {
    console.log('NativeLocalStorage before value');
    const value = NativeLocalStorage?.getItem('count');
    console.log('NativeLocalStorage after value:', value);
    setValueFromTurboModule(value ?? 'NA');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title={`+`} onPress={incrementCount} />
      <Text style={{ fontSize: 24, color: 'black' }}>{count}</Text>
      <Button title={`-`} onPress={decrementCount} />
      <Text>{`TurboModule value: ${valueFromTurboModule}`}</Text>
      <Button title='TurboModule' onPress={getValueFromTurboModule} />
    </View>
  );
};
