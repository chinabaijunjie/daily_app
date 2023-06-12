import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableNativeFeedback,
  ActivityIndicator,
} from 'react-native';

import moment from 'moment';
import NotData from '../../NotData';
import styles from './styles';

const FlatListUpLoadCard = props => {
  const {
    data,
    refresh,
    onRefresh,
    showFoot,
    upLoadData,
    handleItemTo,
    handleLongPress,
    cardJson,
    handleUserKey,
  } = props;
  return (
    <FlatList
      data={data}
      refreshing={refresh ? refresh : false}
      onRefresh={() => {
        onRefresh ? onRefresh() : '';
      }}
      ListEmptyComponent={<NotData iconCode={'\ue6b6'} describeTest={''} />}
      onEndReachedThreshold={0.1}
      onEndReached={() => {
        upLoadData ? upLoadData() : '';
      }}
      ListFooterComponent={_renderFooter(showFoot)}
      renderItem={({item}) => {
        return (
          <TouchableNativeFeedback
            key={item.id}
            onPress={() => {
              handleItemTo ? handleItemTo(item) : '';
            }}
            onLongPress={() => {
              handleLongPress ? handleLongPress(item) : '';
            }}>
            <View>
              <Items
                data={item}
                cardJson={cardJson}
                handleUserKey={handleUserKey}
              />
            </View>
          </TouchableNativeFeedback>
        );
      }}
    />
  );
};

export default FlatListUpLoadCard;

// 列表 每一个列的样式
const Items = props => {
  const {data, cardJson, handleUserKey} = props;
  return (
    <View style={styles.cardBox}>
      <View style={styles.cardChildBox}>
        {cardJson &&
          cardJson.length > 0 &&
          cardJson.map(item => {
            let valFirst = undefined;
            let valSecond = undefined;
            let attribute = {};
            if (item.value && item.value.indexOf('.') > -1) {
              let values = item.value.split('.');
              valFirst = values[0];
              valSecond = values[1];
              attribute = data[valFirst];
            }
            return (
              <View key={item.title} style={styles.cardLine}>
                <View style={styles.cardTitle}>
                  <Text style={[styles.cardTitle, {paddingRight: 10}]}>
                    {item.title}:
                  </Text>
                </View>
                <View style={styles.cardContent}>
                  {/* <Text numberOfLines={2} style={styles.cardContent}>{data[item.value ] ? data[item.value ] : ''}</Text> */}
                  {item.value && item.value.indexOf('.') > -1 ? (
                    <Text numberOfLines={2} style={styles.cardContent}>
                      {attribute[valSecond] ? attribute[valSecond] : ''}
                    </Text>
                  ) : (
                    <Text numberOfLines={2} style={styles.cardContent}>
                      {data[item.value] ? data[item.value] : ''}
                    </Text>
                  )}
                </View>
              </View>
            );
          })}
      </View>
    </View>
  );
};

// 列表尾部展示，无数据或者正在加载，或者是空
function _renderFooter(showFoot = 0) {
  if (showFoot === 1) {
    return (
      <View
        style={{
          height: 30,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <Text
          style={{
            color: '#999999',
            fontSize: 14,
            marginTop: 5,
            marginBottom: 5,
          }}>
          没有更多数据了
        </Text>
      </View>
    );
  } else if (showFoot === 2) {
    return (
      <View style={styles.footer}>
        <ActivityIndicator />
        <Text>正在加载更多数据...</Text>
      </View>
    );
  } else if (showFoot === 0) {
    return (
      <View style={styles.footer}>
        <Text></Text>
      </View>
    );
  }
}

function changeTime(timeStr) {
  let showTime = '';
  if (timeStr) {
    const nowDay = moment().format('YYYY-MM-DD');
    const parameterDay = timeStr.substr(0, 10);
    const parameterTime = timeStr.substr(11);
    if (nowDay === parameterDay) {
      showTime = parameterTime;
    } else {
      showTime = parameterDay;
    }
  }
  return showTime;
}
