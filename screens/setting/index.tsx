import React from 'react';
import {ScrollView} from 'react-native';
import Button from '@ant-design/react-native/lib/button';
import List from '@ant-design/react-native/lib/list';
import {RightClick, Toast} from '../components/antdTheme/';
const Item = List.Item;

const SettingsScreen = () => {
  return (
    <ScrollView>
      <List renderHeader="用户信息">
        <Item extra={'神秘人'}>姓名</Item>
        <Item extra={'公司CEO'}>岗位</Item>
      </List>
      <RightClick
        title={'系统版本'}
        content={'v1.0'}
        handleClick={() => {
          Toast({msg: '别点了，不会有页面的'});
        }}
      />
      <Button
        style={{marginTop: 50, marginLeft: 20, marginRight: 20}}
        type="primary"
        onPress={() => {
          Toast({msg: '不好意思，还在开发中'});
        }}>
        退 出 系 统
      </Button>
    </ScrollView>
  );
};
SettingsScreen.options = {
  topBar: {
    title: {
      text: '个人中心',
    },
  },
  bottomTab: {
    text: '个人中心',
  },
};

export default SettingsScreen;
