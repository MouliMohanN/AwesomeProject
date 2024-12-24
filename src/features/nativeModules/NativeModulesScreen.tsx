import React from 'react';
import { View } from 'react-native';
import { Button } from '../../common/components/Button';
import { ScreenBaseProps } from '../../common/types/ScreenBaseProps';

export const NativeModulesScreen: React.FC<ScreenBaseProps> = ({ navigation }) => {
  const navigateTo = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <View>
      <Button title='Turbo Module' onPress={() => navigateTo('TurboModuleScreen')} />
      <Button title='Nitro Module' onPress={() => {}} />
    </View>
  );
};
