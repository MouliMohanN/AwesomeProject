import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';

import { LegendList } from '@legendapp/list';
import { Dimensions } from 'react-native';
import { getRandomNumber } from '../../common/utils/util';
import { listData as data, renderListItem } from './ListComparisionScreen';

export const LegendListScreen = () => {
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
