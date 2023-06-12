import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';
import {commonStyle} from '../../commonStyle';

const Button = ({title, onPress, marginLeft = 40, reduceWidth = 0}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        style={[
          styles.submitBoxBtn,
          marginLeft
            ? {
                marginLeft: marginLeft,
                width:
                  Dimensions.get('window').width - marginLeft * 2 - reduceWidth,
              }
            : {},
        ]}>
        <Text
          style={[
            styles.submitBoxBtnText,
            marginLeft
              ? {
                  width:
                    Dimensions.get('window').width -
                    marginLeft * 2 -
                    reduceWidth,
                }
              : {},
          ]}>
          {title}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};
export default Button;

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  submitBoxBtn: {
    marginLeft: 40,
    width: windowWidth - 80,
    height: 40,
    lineHeight: 40,
    ...commonStyle.buttonBg,
    borderRadius: 5,
  },
  submitBoxBtnText: {
    width: windowWidth - 80,
    height: 40,
    lineHeight: 40,
    ...commonStyle.buttonBg,
    textAlign: 'center',
    borderRadius: 5,
    fontSize: 17,
  },
});
