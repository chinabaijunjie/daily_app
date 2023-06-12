import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from '../../Icon/';

const RightClick = props => {
  const {title, content, handleClick, strLength = 8} = props;
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          handleClick();
        }}>
        <View style={styles.editionBox}>
          <View style={styles.editionTitle}>
            <Text style={styles.editionTitle}>{title}</Text>
          </View>
          <View style={styles.editionCon}>
            <Text style={styles.editionCon}>
              {content && content.length > strLength
                ? content.substr(0, strLength) + '...'
                : content}
              &nbsp;&nbsp;
              <Icon name={'xiangyou'} size={20} color={'#bfbfbf'} />
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RightClick;

const styles = StyleSheet.create({
  editionBox: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: 45,
    lineHeight: 45,
    backgroundColor: '#fff',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
  },
  editionTitle: {
    marginLeft: 8,
    flex: 1,
    height: 45,
    lineHeight: 45,
    fontSize: 17,
  },
  editionCon: {
    marginRight: 16,
    width: 190,
    height: 45,
    lineHeight: 45,
    fontSize: 14,
    textAlign: 'right',
    color: '#8c8c8c',
  },
});
