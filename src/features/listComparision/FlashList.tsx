import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { Dimensions, View } from 'react-native';
import { listData, renderListItem } from './ListComparisionScreen';

export const FlashListScreen = () => {
  console.log('FlashListScreen rendered');
  return (
    <View style={{ flex: 1 }}>
      <FlashList
        data={listData}
        renderItem={renderListItem}
        estimatedItemSize={30}
        onBlankArea={(blankAreaEvent: { offsetStart: number; offsetEnd: number; blankArea: number }) => {
          console.log('onBlankArea', blankAreaEvent);
        }}
        drawDistance={Dimensions.get('screen').height}
        onViewableItemsChanged={({ viewableItems, changed }) => {
          console.log('onViewableItemsChanged', viewableItems, changed);
        }}
      />
    </View>
  );
};
