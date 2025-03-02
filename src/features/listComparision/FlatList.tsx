import React from 'react';
import { FlatList, View } from 'react-native';
import { listData, renderListItem } from './ListComparisionScreen';

export const FlatListScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList data={listData} renderItem={renderListItem} />
    </View>
  );
};
