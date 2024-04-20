import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import ItemCard from '../../components/Item';
import { useRef } from 'react';

export default function RefrigeratorScreen() {
  const items = [
    { name: 'marinated chicken', date: '2023-12-28', id: 1 },
    { name: 'milk', date: '2023-12-27', id: 2 },
    { name: 'blueberries', date: '2023-12-28', id: 3 },
    { name: 'marinated chicken', date: '2023-12-26', id: 4 },
  ]

  const _renderItem = ({item, index}: {item: any, index: any}) => {
    return <ItemCard name={item.name}/>;
  };

  return (
    <View style={styles.container}>
      <FlatList data={items} keyExtractor={(item, index) =>`${item.id}`} renderItem={_renderItem} />
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
