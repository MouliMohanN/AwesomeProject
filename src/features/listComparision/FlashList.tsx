import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { View } from 'react-native';
import { listData, renderListItem } from './ListComparisionScreen';

export const FlashListScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlashList data={listData} renderItem={renderListItem} estimatedItemSize={200} />
    </View>
  );
};
