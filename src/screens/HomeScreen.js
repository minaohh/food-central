import React from 'react';
import { View, StyleSheet, StatusBar, Text, FlatList } from 'react-native';
import RestaurantCard from '../components/RestaurantCard';
import Header from '../components/Header';

const HomeScreen = () => {
  const restaurants = [
    {
      name: 'The Muffin Man Bakery',
      categories: 'Desserts, Cakes and Bakery',
      deliveryTime: '35 min',
      distance: '3.7 km',
      image: require('../../assets/the-muffin-man-bakery.jpg'),
    },
    {
      name: 'Central Perk Coffee House',
      categories: 'Beverages, Desserts, Cakes and Bakery',
      deliveryTime: '45 min',
      distance: '4.3 km',
      image: require('../../assets/central-perk.jpg'),
    },
    {
      name: 'WildBread Bakery',
      categories: 'Cakes and Bakery, American, Sandwiches, Burgers',
      deliveryTime: '25 min',
      distance: '3 km',
      image: require('../../assets/wildbread-bakery.jpg'),
    },
    {
      name: "McDonald's",
      categories: 'Fast Food, Burgers, Desserts',
      deliveryTime: '20 min',
      distance: '2.5 km',
      image: require('../../assets/mcdo.jpg'),
    },
    {
      name: 'Jollibee',
      categories: 'Fast Food, Burgers, Desserts',
      deliveryTime: '25 min',
      distance: '3.1 km',
      image: require('../../assets/jollibee.jpg'),
    },
  ];

  return (
    <View style={styles.canvas}>
      <StatusBar style="auto" />
      <Header label="FoodCentral" />

      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantCard info={item} />;
        }}
        keyExtractor={(restaurant) => restaurant.name}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  canvas: {
    backgroundColor: '#6c5ce7',
    flex: 1,
    alignItems: 'center',
    paddingBottom: 10,
  },
});

export default HomeScreen;
