import firestore from '@react-native-firebase/firestore';
import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';

export const FirebaseHomeScreen = () => {
  const [data, setData] = React.useState<Array<string>>([]);
  useEffect(() => {
    const callsCollections = firestore().collection('calls');
    callsCollections.get().then((querySnapshot) => {
      console.log('mouli query ', querySnapshot);
      const callsData: Array<string> = [];
      querySnapshot.forEach((doc) => {
        console.log('mouli ', doc.id, ' => ', doc.data(), JSON.stringify(doc.data()));
        callsData.push(JSON.stringify(doc.data()));
      });
      setData(callsData);
    });
    // console.log('useEffect mount FirebaseHomeScreen', callsCollections);
  }, []);

  const renderItem = ({ item }: { item: string }) => (
    <View
      style={{
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      }}
    >
      <Text>{item}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
