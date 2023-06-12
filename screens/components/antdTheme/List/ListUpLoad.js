import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableNativeFeedback,
  ActivityIndicator,
} from 'react-native';

import moment from 'moment';
import Icon from '../../Icon';
import NotData from '../../NotData';

import {commonStyle} from '../../commonStyle';
import styles from './styles';

const FlatListUpLoad = props => {
  const {
    data,
    showFoot,
    upLoadData,
    handleItemTo,
    handleLongPress,
    itemTitle,
    itemTime,
    itemContent,
    iconName,
    iconBg,
    layerNested,
  } = props;
  return (
    <FlatList
      data={data}
      refreshing={false}
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
                itemTitlt={itemTitle}
                itemTime={itemTime}
                itemContent={itemContent}
                iconName={iconName}
                iconBg={iconBg}
                layerNested={layerNested}
              />
            </View>
          </TouchableNativeFeedback>
        );
      }}
    />
  );
};

export default FlatListUpLoad;

// 列表 每一个列的样式
const Items = props => {
  const {
    data,
    itemTitlt,
    itemTime,
    itemContent,
    iconName,
    iconBg,
    layerNested,
  } = props;
  return (
    <View style={styles.itemBox}>
      <View>
        <Text
          style={[
            styles.iconBox,
            {backgroundColor: iconBg ? iconBg : '#1890ff'},
          ]}>
          <Text style={commonStyle.icons}>
            <Icon
              name={iconName ? iconName : 'empty'}
              size={26}
              color={'#fff'}
            />
          </Text>
        </Text>
      </View>
      <View style={styles.contentBox}>
        <View style={styles.TitleAndTime}>
          <View style={styles.topTitle}>
            <Text style={styles.topTitle} numberOfLines={1}>
              {data[itemTitlt] ? data[itemTitlt] : ''}
            </Text>
          </View>
          <View style={styles.topRightCon}>
            <Text style={styles.topRightCon} numberOfLines={1}>
              {data[itemTime] ? data[itemTime] : ''}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.bottomContent} numberOfLines={1}>
            {data[itemContent] ? data[itemContent] : ''}
          </Text>
        </View>
        <View>
          <Text style={styles.bottomContent} numberOfLines={1}>
            {layerNested ? data[layerNested.name1][layerNested.name2] : ''}
          </Text>
        </View>
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
