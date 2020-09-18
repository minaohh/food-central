import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import RestaurantCard from '../components/RestaurantCard';

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.resultsText}>We found {results.length} results.</Text>

      <FlatList
        data={results}
        renderItem={({ item }) => {
          return <RestaurantCard info={item} />;
        }}
        keyExtractor={(restaurant) => restaurant.id}
        showsHorizontalScrollIndicator={false}
        style={{ maxHeight: 300, marginBottom: 30 }}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#eee',
  },
  resultsText: {
    marginLeft: 20,
    color: '#bbb',
  },
});

export default ResultsList;
