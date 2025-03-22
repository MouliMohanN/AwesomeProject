import { FlashList } from '@shopify/flash-list';
import React, { useEffect, useRef } from 'react';
import { Dimensions, View } from 'react-native';
import { getRandomNumber } from '../../common/utils/util';
import { listData as data, renderListItem } from './ListComparisionScreen';

export const FlashListScreen = () => {
  console.log('FlashListScreen rendered');

  const [listData, setListData] = React.useState(data);
  const listDataRef = useRef(listData);

  useEffect(() => {
    setInterval(() => {
      setListData([...listDataRef.current]);
    }, 200);
    setInterval(() => {
      const index = Math.floor(Math.random() * listDataRef.current.length);
      listDataRef.current[index] = `Item_${index}_${getRandomNumber()}`;
    }, 5);
  }, []);

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
