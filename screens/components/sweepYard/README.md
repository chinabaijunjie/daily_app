### 拍照组件 是一个注册在app中的一个组件

使用方式 【getPictrue 是一个方法，会收到一个参数，里面包含所有的照片的数据】

// 调用摄像头
  handleToCamera = () => {
    const { navigation } = this.props;
    navigation.navigate('CameraScreen', {getPictrue: this.getPictrue, title: '获取全景照'});
  }