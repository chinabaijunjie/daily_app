import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {
  StyleSheet,
  Animated,
  PermissionsAndroid,
  default as Easing,
} from 'react-native';

import {Toast} from '../antdTheme';

export default class SweepYardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //中间横线动画初始值
      moveAnim: new Animated.Value(-2),
      switchs: true,
    };
    this.requestCameraPermission = this.requestCameraPermission.bind(this);
  }

  static navigationOptions = {
    header: null,
  };

  componentWillMount() {
    this.requestCameraPermission();
  }

  componentDidMount() {
    this.startAnimation();
  }

  //请求权限的方法
  async requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: '申请摄像头权限',
          message: '中国铁塔申请使用摄像头',
          buttonNeutral: '等会再问我',
          buttonNegative: '不同意',
          buttonPositive: '同意',
        },
      );
    } catch (err) {
      console.warn(err);
    }
  }

  /** 扫描框动画*/
  startAnimation = () => {
    this.state.moveAnim.setValue(-2);
    Animated.sequence([
      Animated.timing(this.state.moveAnim, {
        toValue: 200,
        duration: 1500,
        easing: Easing.linear,
      }),
      Animated.timing(this.state.moveAnim, {
        toValue: -1,
        duration: 1500,
        easing: Easing.linear,
      }),
    ]).start(() => this.startAnimation());
  };

  onBarCodeRead = result => {
    const {data} = result; //只要拿到data就可以了
    console.log('result ==============>', result);
    try {
      //扫码后的操作
      if (data) {
        
      }
    } catch {
      Toast({msg: '二维码解析错误，请手动查询'});
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          autoFocus={RNCamera.Constants.AutoFocus.on} /*自动对焦*/
          style={[styles.preview]}
          type={RNCamera.Constants.Type.back} /*切换前后摄像头 front前back后*/
          flashMode={RNCamera.Constants.FlashMode.off} /*相机闪光模式*/
          onBarCodeRead={this.onBarCodeRead}>
          <View
            style={{
              width: 500,
              height: 220,
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}
          />
          <View style={[{flexDirection: 'row'}]}>
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,0.5)',
                height: 200,
                width: 200,
              }}
            />
            <Animated.View
              style={[
                styles.border,
                {transform: [{translateY: this.state.moveAnim}]},
              ]}
            />
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,0.5)',
                height: 200,
                width: 200,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              width: 500,
              alignItems: 'center',
            }}>
            <Text style={styles.rectangleText}>
              将二维码放入框内，即可自动扫描
            </Text>
          </View>
        </RNCamera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangleContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rectangle: {
    height: 200,
    width: 200,
    borderWidth: 1,
    borderColor: '#fcb602',
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
  rectangleText: {
    flex: 0,
    color: '#fff',
    marginTop: 10,
  },
  border: {
    flex: 0,
    width: 196,
    height: 2,
    backgroundColor: '#fcb602',
    borderRadius: 50,
  },
});
