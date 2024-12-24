import React from 'react';
import { View } from 'react-native';
import { Button } from '../../../common/components/Button';
import { ScreenBaseProps } from '../../../common/types/ScreenBaseProps';

export const TurboModuleScreen: React.FC<ScreenBaseProps> = ({ navigation }) => {
  return (
    <View>
      <Button title='Turbo Module' onPress={() => {}} />
    </View>
  );
};
