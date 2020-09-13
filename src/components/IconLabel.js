import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const IconLabel = ({ iconName, iconColor, label }) => {
  return (
    <View style={styles.container}>
      <Icon
        name={iconName}
        type="ionicon"
        color={iconColor}
        size={13}
        style={styles.iconStyle}
      />
      <Text style={styles.labelStyle}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 11,
    color: '#333',
    fontWeight: '300',
    marginRight: 10,
  },
  iconStyle: {
    marginRight: 2,
  },
});

export default IconLabel;
