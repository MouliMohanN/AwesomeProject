import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Button } from '../../common/components/Button';
import { ScreenBaseProps } from '../../common/types/ScreenBaseProps';
import { getRandomNumber } from '../../common/utils/util';
import { ListItem } from './ListItem';

export const listData: Array<string> = [];

export const renderListItem = ({ item }: { item: string }) => {
  console.log('renderListItem function', item);
  return <ListItem item={item} />;
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
      <Button title='Legend List' onPress={() => props.navigation.navigate('LegendListScreen')} />
    </View>
  );
};
