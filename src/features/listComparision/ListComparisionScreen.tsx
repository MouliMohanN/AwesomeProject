import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { Button } from '../../common/components/Button';
import { ScreenBaseProps } from '../../common/types/ScreenBaseProps';
import { getRandomNumber } from '../../common/utils/util';

export const listData: Array<string> = [];

export const renderListItem = ({ item }: { item: string }) => {
  return (
    <View style={{ height: 50, paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: 'gray' }}>
      <Text>{item}</Text>
    </View>
  );
};

export const ListComparisionScreen = (props: ScreenBaseProps) => {
  useEffect(() => {
    Array(4000)
      .fill(0)
      .forEach(() => listData.push(`Item_${listData.length}_${getRandomNumber()}`));
  }, []);

  return (
    <View>
      <Button title='Flat List' onPress={() => props.navigation.navigate('FlatListScreen')} />
      <Button title='Flash List' onPress={() => props.navigation.navigate('FlashListScreen')} />
    </View>
  );
};
