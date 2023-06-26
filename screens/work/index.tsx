import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {workModule1, workModule2} from './config';
import { Grad } from '../components/antdTheme'
import Icon from '../components/Icon';
import { WingBlank } from '@ant-design/react-native';

const WorkScreen = (props: {componentId: string}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <WingBlank size="md">
          <Grad
            data={workModule1}
            title={'演示模块'}
            columnNum={4}
            navigation={Navigation}
          />
        </WingBlank>
        <WingBlank size="md">
          <Grad
            data={workModule2}
            title={'功能模块'}
            columnNum={4}
            navigation={Navigation}
          />
        </WingBlank>
      </ScrollView>
    </SafeAreaView>
  );
};

WorkScreen.options = {
  topBar: {
    title: {
      text: '工作台',
    },
  },
  bottomTab: {
    text: '工作台',
  },
};

export default WorkScreen;
