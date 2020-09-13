import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import IconLabel from './IconLabel';

const RestaurantCard = ({ info }) => {
  const purpleIconColor = '#6c5ce7';

  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={info.image} />

      <View style={styles.infoStyle}>
        <Text style={styles.title}>{info.name}</Text>
        <Text style={styles.categStyle}>{info.categories}</Text>

        <View style={{ flexDirection: 'row' }}>
          <IconLabel
            label={info.deliveryTime}
            iconName="ios-time"
            iconColor={purpleIconColor}
          />
          <IconLabel
            label={info.distance}
            iconName="ios-pin"
            iconColor={purpleIconColor}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a29bfe',
    width: 370,
    height: 200,
    borderRadius: 20,
    marginTop: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 0.36,
  },
  infoStyle: {
    marginVertical: 5,
    marginHorizontal: 10,
  },
  imageStyle: {
    height: 130,
    width: 370,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    opacity: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
  },
  categStyle: {
    fontWeight: '200',
    marginBottom: 10,
  },
});

export default RestaurantCard;
