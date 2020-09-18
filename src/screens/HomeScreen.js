import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, Text, ScrollView } from 'react-native';

import Header from '../components/Header';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';

import useRestaurants from '../hooks/useRestaurants';

const HomeScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useRestaurants();

  const filterResultsByPrice = (amount) => {
    //price === '$', '$$' '$$$', '$$$$'
    return results.filter((result) => {
      return result.price === amount;
    });
  };

  return (
    <View style={styles.canvas}>
      <StatusBar style="auto" />
      {/* <Header label="FoodCentral" /> */}

      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
        // pass a reference to the function
      />

      <Text>{term}</Text>
      {errorMessage !== '' && (
        <Text style={{ color: 'red', backgroundColor: '#eee' }}>
          {errorMessage}
        </Text>
      )}

      <ScrollView
        style={styles.restaurantsContainer}
        showsVerticalScrollIndicator={false}
      >
        <ResultsList
          title="Affordable Picks"
          results={filterResultsByPrice('$')}
        />

        <ResultsList
          title="Moderately Priced"
          results={filterResultsByPrice('$$')}
        />

        <ResultsList title="Luxurious" results={filterResultsByPrice('$$$')} />

        <ResultsList title="Elite" results={filterResultsByPrice('$$$$')} />
      </ScrollView>
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
  restaurantsContainer: {
    flex: 1,
    marginTop: 10,
  },
});

export default HomeScreen;

// OLD LIST
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
