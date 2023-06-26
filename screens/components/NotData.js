import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from './Icon';

const NotData = props => {
  const {iconCode, size = 20, color, describeTest} = props;
  return (
    <View style={styles.notdata}>
      <View style={styles.iconbox}>
        <Text style={styles.icons}>
          <Icon name={iconCode} size={size} color={color} />
        </Text>
      </View>
      <View style={styles.iconbox}>
        <Text style={styles.describe}>{describeTest}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notdata: {
    marginTop: 20,
    marginBottom: 20,
  },
  iconbox: {
    textAlign: 'center',
  },
  icons: {
    fontSize: 80,
    textAlign: 'center',
  },
  describe: {
    textAlign: 'center',
  },
});

export default NotData;
