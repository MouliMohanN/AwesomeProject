import React from 'react';
import { View } from 'react-native';
import { Button } from '../../common/components/Button';
import { ScreenBaseProps } from '../../common/types/ScreenBaseProps';

export type CodeParetScreenProps = ScreenBaseProps;

export const CodeParrotScreen: React.FC<CodeParetScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Button title='Screeners' onPress={() => navigation.navigate('ScreenersScreen')} />
      <Button title='Market Screen' onPress={() => navigation.navigate('MarketScreen')} />
    </View>
  );
};
