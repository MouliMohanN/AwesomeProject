import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

export const ListItem = ({ item }: { item: string }) => {
  useEffect(() => {
    console.log('useEffect mount');
    return () => console.log('useEffect unmount');
  }, []);

  return (
    <View style={{ height: 50, paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: 'gray' }}>
      <Text>{item}</Text>
    </View>
  );
};
