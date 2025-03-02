import React from 'react';
import { View } from 'react-native';

import { LegendList } from '@legendapp/list';
import { Dimensions } from 'react-native';
import { listData, renderListItem } from './ListComparisionScreen';

export const LegendListScreen = () => {
  console.log('FlashListScreen rendered');
  return (
    <View style={{ flex: 1 }}>
      <LegendList
        data={listData}
        renderItem={renderListItem}
        estimatedItemSize={30}
        drawDistance={Dimensions.get('screen').height}
        onViewableItemsChanged={({ viewableItems, changed }) => {
          console.log('onViewableItemsChanged', viewableItems, changed);
        }}
        recycleItems={true}
      />
    </View>
  );
};
