import { Button, FlatList, StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import ItemCard from '../../components/Item';
import Axios from 'axios';
import { useState } from 'react';

export default function CounterScreen() {
  const [stores, setStores] = useState<any>();

  const _renderItem = ({ item, index }: { item: any; index: any }) => {
    return <ItemCard name={item.name} containerStyle={{marginVertical: 10}}/>;
  };

  const key = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

  const getData = async () => {
    try {
      const { data } = await Axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=grocery&location=36.822350,-76.120712&radius=5&key=${key}`
      );
      console.log('result', data.results);
      setStores(data.results);
    } catch (error) {
      console.log('error message:', error.response.data);
    }
  };

  return (
    <View style={styles.container}>
      {stores && (
        <FlatList
          data={stores}
          keyExtractor={(item, index) => `${index}`}
          renderItem={_renderItem}
          ListHeaderComponent={
            <View style={{ padding: 20 }}>
              <Text style={{ fontSize: 30 }}>Grocery Stores nearby</Text>
            </View>
          }
        />
      )}
      <Button onPress={getData} title='Get nearyby grocery data' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
