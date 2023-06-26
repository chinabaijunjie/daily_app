/**
 * @format
 */
import React from 'react';
import {Navigation} from 'react-native-navigation';
import {View, StyleSheet, Button} from 'react-native';
import App from './App';
import HomeScreen from './screens/home';
import WorkScreen from './screens/work';
import SettingsScreen from './screens/setting';
// import SweepYardScreen from './screens/components/sweepYard';// 扫码二维码

const LoginScreen = () => {
  return (
    <View style={styles.root}>
      <Button
        title="登录"
        color="#710ce3"
        onPress={() => Navigation.setRoot(mainRoot)}
      />
    </View>
  );
};

const mainRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Home',
                },
              },
            ],
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Work',
                },
              },
            ],
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Settings',
                },
              },
            ],
          },
        },
      ],
    },
  },
};
const loginRoot = {
  root: {
    component: {
      name: 'Login',
    },
  },
};

Navigation.registerComponent('Login', () => LoginScreen);
Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Work', () => WorkScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);
// Navigation.registerComponent('SweepYard', () => SweepYardScreen);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(isLoggedIn() ? mainRoot : loginRoot);
});

function isLoggedIn() {
  return true;
}

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#000',
  },
  topBar: {
    title: {
      color: '#000',
    },
    backButton: {
      color: '#000',
    },
    background: {
      color: '#fff',
    },
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 20,
    selectedTextColor: '#4d089a',
  },
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
