import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import { NavigationComponent } from 'react-native-navigation';

import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {Toast} from '../components/antdTheme';

//网络图片地址
let imgURL =
  'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=8d3a9ea62c7f9e2f6f351b082f31e962/500fd9f9d72a6059099ccd5a2334349b023bbae5.jpg';

class PhotoAlbumScreen extends NavigationComponent {
  static options = {
    topBar: {
      title: {
        text: '相册',
      },
    },
  };

  //构造函数
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      lastCursor: '',
      nomore: false,
    };
  }

  componentDidMount() {
    this.getImages();
    if (Platform.OS === 'android') {
      hasAndroidPermission();
    }
  }

  render() {
    let data = [{title: 'a'}, {title: 'a'}, {title: 'a'}, {title: 'a'}];
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            style={styles.img}
            source={{uri: this.state.img}}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text
            onPress={this.saveImg.bind(this, imgURL)}
            style={[styles.saveImg]}>
            保存图片到相册
          </Text>
        </View>
        <View>
          <Text onPress={() => this.getImages()} style={[styles.saveImg]}>
            获取图片列表
          </Text>
        </View>

        <FlatList
          data={this.state.photos}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  img: item,
                })
              }>
              <Image
                source={{uri: item}}
                style={{width: 250, height: 250, resizeMode: 'stretch'}}
              />
            </TouchableOpacity>
          )}
          onEndReachedThreshold={0.1}
          onEndReached={() => this.getImages()}
        />
      </View>
    );
  }

  //保存图片
  saveImg = img => {
    var promise = CameraRoll.saveToCameraRoll(img);
    promise
      .then(function (result) {
        Toast({msg: '保存成功！地址如下：\n' + result});
      })
      .catch(function (error) {
        Toast({msg: '保存失败！\n' + error});
      });

    CameraRoll.saveToCameraRoll(img)
      .then(result => {
        Toast({msg: '保存成功！地址如下：\n' + result});
      })
      .catch(error => {
        Toast({msg: '保存失败！\n' + error});
      });
  };

  //获取图片列表
  getImages = () => {
    if (this.state.nomore) {
      Toast({msg: '没有更多图片了'});
      return;
    }
    let param = {first: 5, groupTypes: 'All', assetType: 'Photos'};
    // 如果不是第一次取图片，则this.state.lastCursor不为空，下一次取图片时就从上次的结尾开始取
    if (this.state.lastCursor) {
      param.after = this.state.lastCursor;
    }

    CameraRoll.getPhotos(param).then(
      data => {
        console.log('获取图片=========》', data);
        this._appendAssets(data); // 取到图片数据后，交由appendAssets处理
      },
      e => {},
    );
  };

  _appendAssets = data => {
    let newState = {};
    let edges = data.edges;
    let photos = [];
    for (let i in edges) {
      photos.push(edges[i].node.image.uri);
    }
    console.log(photos);
    if (!data.page_info.has_next_page) {
      //已经到相册的末尾了
      newState.noMore = true;
    }
    if (photos.length > 0) {
      //如果此次加载的图片数量大于0
      newState.lastCursor = data.page_info.end_cursor;
      newState.photos = this.state.photos.concat(photos);
      this.setState(newState);
    }
  };

  upLoadImg = (uri, token) => {
    let imgFile = new FromData();
    imgFile.append('file', {
      uri,
      type: 'application/octet-stream',
      name: 'head.jpg',
    });
    fetch('url', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data;charset=utf-8',
        'x-access-token': token,
      },
      body: imgFile,
    }).then();
  };
}

async function hasAndroidPermission() {
  const getCheckPermissionPromise = () => {
    if (Platform.Version >= 33) {
      return Promise.all([
        PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
        ),
        PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
        ),
      ]).then(
        ([hasReadMediaImagesPermission, hasReadMediaVideoPermission]) =>
          hasReadMediaImagesPermission && hasReadMediaVideoPermission,
      );
    } else {
      return PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
    }
  };

  const hasPermission = await getCheckPermissionPromise();
  if (hasPermission) {
    return true;
  }
  const getRequestPermissionPromise = () => {
    if (Platform.Version >= 33) {
      return PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
      ]).then(
        statuses =>
          statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] ===
            PermissionsAndroid.RESULTS.GRANTED,
      );
    } else {
      return PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ).then(status => status === PermissionsAndroid.RESULTS.GRANTED);
    }
  };

  return await getRequestPermissionPromise();
}

export default PhotoAlbumScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: 'white',
    // alignItems: 'center'
  },
  welcome: {
    marginTop: 20,
    fontSize: 20,
  },
  image: {
    borderWidth: 1,
    width: 300,
    height: 100,
    borderRadius: 5,
    borderColor: '#ccc',
    marginTop: 50,
  },
  img: {
    height: 98,
    width: 300,
    resizeMode: 'stretch',
  },
  saveImg: {
    height: 30,
    padding: 6,
    textAlign: 'center',
    backgroundColor: '#3BC1FF',
    color: '#FFF',
    marginTop: 10,
  },
});
