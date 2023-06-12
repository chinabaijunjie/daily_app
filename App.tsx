/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import HeaderScreen from './screens/Header';
import Section from './screens/Section';
import {Button, Toast} from './screens/components/antdTheme';
import Icon from './screens/components/Icon';

function App(): JSX.Element {
  // 这个是react-native 提供的hook，可以获取当前手机是否是深色模式；
  const isDarkMode = useColorScheme() === 'dark';
  const [closeStatusBar, setCloseStatusBar] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleToast = () => {
    Toast({msg: '我就是提示信息，哈哈'});
  };

  return (
    <NavigationContainer>
      {/* SafeAreaView 是从0.50.1开始出现的一个很牛X的组件
        SafeAreaView的目的是在一个“安全”的可视区域内渲染内容。具体来说就是因为目前有 iPhone X 这样的带有“刘海”的全面屏设备，所以需要避免内容渲染到不可见的“刘海”范围内。
        还会会自动根据系统的各种导航栏、工具栏等预留出空间来渲染内部内容。更重要的是，它还会考虑到设备屏幕的局限，比如屏幕四周的圆角或是顶部中间不可显示的“刘海”区域。
      */}
      <SafeAreaView style={backgroundStyle}>
        {/* 没错，这个家伙就是你手机的状态栏，电量啊之类的东西就是用这个，如果不设置这个，相信我，这将是一个沉浸式的应用。因为你完全感受不到现在几点了 */}
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
          hidden={closeStatusBar}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <HeaderScreen dark={isDarkMode} />
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section dark={isDarkMode} title="第一个">
              来吧，开始沉浸式体验吧。忘记时间 组件：StatusBar
              <Text style={styles.showOff}>
                {closeStatusBar ? ' ~看，没了吧~ ' : ''}
              </Text>
            </Section>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="rgba(221, 221, 221, 0.5)"
              style={styles.highlight}
              onPress={() => {
                setCloseStatusBar(!closeStatusBar);
              }}>
              <Text style={styles.highlightText}>
                {closeStatusBar ? '想看时间了？' : '点我忘记时间'}
              </Text>
            </TouchableHighlight>
          </View>
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section dark={isDarkMode} title="第二个">
              <Button onPress={handleToast} title={'看我看我'} />
              <View>
                <Text style={styles.showOff}>这个按钮</Text>
              </View>
            </Section>
          </View>
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section dark={isDarkMode} title="第三个">
              这个是一个不可缺少的组件：Icon
            </Section>
            <View>
              <Text>
                <Icon name={'empty'} size={26} color={'#000'} />
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    marginTop: 15,
    marginLeft: 20,
    width: 100,
    height: 30,
  },
  showOff: {
    fontWeight: '500',
    fontSize: 18,
    color: '#e2a217',
  },
  publicText: {
    paddingLeft: 15,
    fontWeight: '500',
    fontSize: 18,
  },
  highlightText: {
    fontWeight: '700',
    fontSize: 18,
    color: '#1743e2',
  },
});

export default App;
