import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import wa from './wa.jpg';

type HeaderProps = PropsWithChildren<{
  dark: boolean;
}>;

function HeaderScreen({dark}: HeaderProps) {
  return (
    <View style={styles.headerBox}>
      <Image style={styles.imgBox} source={wa} />
      <View style={styles.descBox}>
        <Text
          style={[
            styles.desc,
            {
              color: dark ? Colors.white : Colors.black,
            },
          ]}>
          告诉你们一个不幸的消息
        </Text>
        <Text
          style={[
            styles.desc,
            {
              color: dark ? Colors.white : Colors.black,
            },
          ]}>
          这真的是一个极其简单的App
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBox: {
    flex: 1,
    height: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgBox: {
    marginRight: 15,
    marginLeft: 15,
    width: 60,
    height: 60,
  },
  descBox: {
    flex: 1,
    flexDirection: 'column',
  },
  desc: {
    marginBottom: 10,
    fontWeight: '600',
    fontSize: 18,
  },
});

export default HeaderScreen;
