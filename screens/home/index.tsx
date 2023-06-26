import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Icon from '../components/Icon';
import {Modal} from '../components/antdTheme';
import NotData from '../components/NotData';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const getInputCon = (text: React.SetStateAction<string>) => {
    setSearchText(text);
  };

  const dwonRefresh = () => {
    setRefresh(true);

    setTimeout(() => {
      setRefresh(false);
    }, 5000);
  };

  return (
    <View>
      <View style={styles.inputBox}>
        <View style={styles.searchIcon}>
          <Text style={styles.searchIcon}>
            <Icon name={'search'} size={20} color="#8c8c8c" />
          </Text>
        </View>
        <View style={styles.input}>
          <TextInput onChangeText={getInputCon} style={styles.input} />
        </View>

        <View style={styles.searchText}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              setShowModal(true);
            }}>
            <Text style={styles.searchText}>搜索</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <FlatList
          data={[]}
          refreshing={refresh ? refresh : false}
          onRefresh={dwonRefresh}
          ListEmptyComponent={
            <NotData
              iconCode={'xiaoxi'}
              size={120}
              color={'#bfbfbf'}
              describeTest={'暂无消息'}
            />
          }
        />
      </ScrollView>

      <Modal
        visible={showModal}
        closeModel={() => {
          setShowModal(false);
        }}
        contentStyle={{
          height: 100,
          paddingTop: 10,
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: 10,
          color: '#000',
          backgroundColor: '#fff',
        }}>
        <Text>{searchText}</Text>
      </Modal>
    </View>
  );
};

HomeScreen.options = {
  topBar: {
    visible: false,
  },
  bottomTab: {
    text: '首页',
  },
};

let styles = StyleSheet.create({
  inputBox: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    margin: 15,
    height: 40,
    borderWidth: 0.5,
    borderColor: '#d9d9d9',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
  },
  searchIcon: {
    width: 30,
    height: 40,
    lineHeight: 40,
    textAlign: 'center',
  },
  input: {
    flex: 1,
  },
  searchText: {
    width: 40,
    height: 40,
    lineHeight: 40,
    textAlign: 'center',
  },
  titleStyle: {
    width: Dimensions.get('window').width - 80,
    height: 40,
    lineHeight: 40,
    marginLeft: 20,
    fontSize: 16,
    color: '#bfbfbf',
    textAlign: 'left',
  },
  toTop: {
    width: Dimensions.get('window').width - 80,
    height: 40,
    lineHeight: 40,
  },
  btnCon: {
    width: Dimensions.get('window').width - 80,
    height: 40,
    lineHeight: 40,
    fontSize: 18,
    color: '#8c8c8c',
    paddingLeft: 20,
  },

  // 版本更新弹窗
  versionModalContent: {
    marginTop: 130,
    width: Dimensions.get('window').width - 160,
    height: 220,
    display: 'flex',
  },
  versionTitleUpdate: {
    width: Dimensions.get('window').width - 160,
    height: 30,
    lineHeight: 30,
  },
  versionTitleContent: {
    lineHeight: 30,
    fontSize: 22,
    textAlign: 'center',
  },
  versionBg: {
    marginLeft: 40,
    width: Dimensions.get('window').width - 160,
    height: 400,
  },
  versionNumber: {
    width: Dimensions.get('window').width - 160,
    height: 30,
    lineHeight: 30,
  },
  versionNumberContent: {
    lineHeight: 30,
    fontSize: 18,
    textAlign: 'center',
  },

  versionContent: {
    flex: 1,
    flexDirection: 'column',
    width: Dimensions.get('window').width - 160,
    height: 160,
  },
  versionContentDetail: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('window').width - 160,
    height: 24,
    lineHeight: 24,
  },
  versionContentDetailText: {
    flex: 1,
    height: 24,
    lineHeight: 24,
    fontSize: 14,
  },
  versionContentIconBox: {
    marginTop: 5,
    marginLeft: 30,
    marginRight: 10,
    width: 18,
    height: 18,
    lineHeight: 18,
    borderRadius: 12,
    backgroundColor: '#eaff8f',
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: '#a0d911',
    textAlign: 'center',
  },
  updateBox: {
    width: Dimensions.get('window').width - 160,
    height: 40,
    lineHeight: 40,

    textAlign: 'center',
  },
  updateButtn: {
    marginLeft: (Dimensions.get('window').width - 160 - 100) / 2,
    marginTop: 10,
    width: 100,
    height: 30,
    lineHeight: 26,
    textAlign: 'center',
    color: '#52c41a',
    // backgroundColor: '#590',
    fontSize: 22,
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#52c41a',
  },
});

export default HomeScreen;
