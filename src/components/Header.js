import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 500,
    height: 90,
    backgroundColor: '#a29bfe',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  labelStyle: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 20,
  },
});

export default Header;
