import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const NotData = props => {
  const {iconCode, describeTest} = props;
  return (
    <View style={styles.notdata}>
      <View style={styles.iconbox}>
        <Text style={styles.icons}>{iconCode}</Text>
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
    flex: 1,
  },
  icons: {
    textAlign: 'center',
    fontFamily: 'iconfont',
    fontSize: 80,
    color: '#ccc',
  },
  describe: {
    textAlign: 'center',
  },
});

export default NotData;
