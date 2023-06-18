/**
 * @format
 */

import {View, Text, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);

const HomeScreen = props => {
  return (
    <View style={styles.root}>
      <Text>Home Screen</Text>
    </View>
  );
};
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
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
  });
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};
