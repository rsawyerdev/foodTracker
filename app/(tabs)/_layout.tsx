import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Refrigerator',
          tabBarIcon: () => <MaterialCommunityIcons name="fridge-bottom" size={24} color="black" />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="freezer"
        options={{
          title: 'Freezer',
          tabBarIcon: () => <MaterialCommunityIcons name="fridge-top" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="pantry"
        options={{
          title: 'Panty',
          tabBarIcon: () => <MaterialCommunityIcons name="bread-slice-outline" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: 'Grocery Stores',
          tabBarIcon: () => <MaterialCommunityIcons name="store-marker" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}
