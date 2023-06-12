import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableNativeFeedback,
  TouchableOpacity,
  Image,
  SectionList,
} from 'react-native';
import moment from 'moment';
import Icon from '../../Icon';
import NotData from '../../NotData';

import {commonStyle} from '../../commonStyle';
import styles from './styles';

const ListDownLoads = props => {
  const {
    data,
    refresh,
    onRefresh,
    handleItemTo,
    handleLongPress,
    itemTitle,
    itemTime,
    itemContent,
    iconName,
    iconBg,
    handleToNotify,
    firstNotifyData,
    newNotifyTime,
    firstNotifyText,
    unReadNum,
    queryList,
  } = props;
  const messageRenderItem = ({item, index, section: {title}}) => {
    return (
      <FlatList
        data={data.newData}
        ListEmptyComponent={<NotData iconCode={'\ue6b6'} describeTest={''} />}
        renderItem={({item}) => {
          return (
            <TouchableNativeFeedback
              onPress={() => {
                handleItemTo ? handleItemTo(item, data) : '';
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
                />
              </View>
            </TouchableNativeFeedback>
          );
        }}
      />
    );
  };
  const notifyRenderItem = ({item, index, section: {title}}) => {
    return (
      <NotifyManage
        handleToNotify={handleToNotify}
        firstNotifyData={firstNotifyData}
        newNotifyTime={newNotifyTime}
        firstNotifyText={firstNotifyText}
        notifyData={data.notifyData}
        unReadNum={unReadNum}
      />
    );
  };
  return (
    <SectionList
      refreshing={refresh ? refresh : false}
      onRefresh={() => {
        onRefresh ? onRefresh() : '';
      }}
      renderItem={({item, index, section}) => <Text key={index}></Text>}
      sections={[
        {title: '提醒', data: [firstNotifyData], renderItem: notifyRenderItem},
        {title: '公告', data: ['无'], renderItem: messageRenderItem},
      ]}
      keyExtractor={(item, index) => item + index}
    />
  );
};

export default ListDownLoads;
// 提醒管理
const NotifyManage = props => {
  const {
    handleToNotify,
    firstNotifyData,
    newNotifyTime,
    firstNotifyText,
    notifyData,
    unReadNum,
  } = props;
  return (
    <TouchableOpacity
      onPress={handleToNotify}
      style={styles.notifyManageStyle}
      activeOpacity={1}>
      <View style={styles.notifyBorderStyle}>
        <Image
          source={require('../../../resource/assets/notify.png')}
          style={styles.notifyImageStyle}
        />
      </View>
      <View style={styles.notifyTextBox}>
        <View style={styles.notifyTopBox}>
          <View style={styles.notifyTitleStyle}>
            <Text style={styles.topTextStyle}>提醒管理</Text>
          </View>
          <View style={styles.notifyCompanyStyle}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.topTextStyle}>
              {firstNotifyData && firstNotifyData.createDepartmentName
                ? firstNotifyData.createDepartmentName
                : ''}
            </Text>
          </View>
          <View style={styles.notifyDateStyle}>
            <Text style={styles.dateStyle}>{newNotifyTime}</Text>
          </View>
        </View>
        <View style={styles.notifyBottomBox}>
          <Text style={styles.notifyMsgStyle}>{firstNotifyText}</Text>
        </View>
      </View>
      {notifyData.some(item => item.isRead === 0) && (
        <View style={styles.newNotifyBox}>
          <Text style={styles.unReadNumStyle}>
            {unReadNum > 0 && unReadNum < 10 ? unReadNum : null}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const Items = props => {
  const {data, itemTitlt, itemTime, itemContent, iconName, iconBg} = props;
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
              size={30}
              color={'#fff'}
            />
          </Text>
        </Text>
      </View>
      <View style={styles.contentBox}>
        <View style={styles.TitleAndTime}>
          <View style={styles.topTitleDownLoad}>
            <Text style={styles.topTitleDownLoad} numberOfLines={1}>
              {data[itemTitlt] ? data[itemTitlt] : ''}
            </Text>
          </View>
          <View style={styles.isReadBox}>
            <Text
              style={data['isRead'] == 1 ? styles.isRead : styles.isNotRead}>
              {data['isRead'] == 1 ? '已读' : '未读'}
            </Text>
          </View>
          <View style={styles.topTime}>
            <Text style={styles.topTime}>
              {changeTime(data[itemTime] ? data[itemTime] : '')}
            </Text>
          </View>
          <View style={data['isTop'] ? styles.announceTop : ''}></View>
        </View>
        <View>
          <Text style={styles.bottomContent} numberOfLines={1}>
            {data[itemContent] ? data[itemContent] : ''}
          </Text>
        </View>
      </View>
    </View>
  );
};

function changeTime(timeStr) {
  let showTime = '';
  if (timeStr && timeStr.length > 0) {
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
