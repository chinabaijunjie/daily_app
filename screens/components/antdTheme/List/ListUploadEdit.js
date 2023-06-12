import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';

import Icon from '../../Icon';
import NotData from '../../NotData';

import {commonStyle} from '../../commonStyle';
import styles from './styles';

export default class FlatListUpLoadEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCheck: false,
    };
  }

  // 列表 每一个列的样式
  Items = data => {
    const {
      itemTitle,
      itemTime,
      itemContent,
      iconName,
      iconBg,
      editSelectKeyList,
    } = this.props;
    const {showCheck} = this.state;
    return (
      <View style={styles.itemBox}>
        <View>
          {showCheck ? (
            <Text style={[styles.iconBox]}>
              <Text style={commonStyle.icons}>
                <Icon
                  name={'xuanze2'}
                  size={22}
                  color={this.isSelect(data.id) ? '#1890ff' : '#e8e8e8'}
                />
              </Text>
            </Text>
          ) : (
            <Text
              style={[
                styles.iconBox,
                {backgroundColor: iconBg ? iconBg : '#1890ff'},
              ]}>
              <Text style={commonStyle.icons}>
                <Icon
                  name={iconName ? iconName : 'empty'}
                  size={26}
                  color={'#fff'}
                />
              </Text>
            </Text>
          )}
        </View>
        <View style={styles.contentBox}>
          <View style={styles.TitleAndTime}>
            <View style={styles.topTitle}>
              <Text style={styles.topTitle} numberOfLines={1}>
                {data[itemTitle] ? data[itemTitle] : ''}
              </Text>
            </View>
            <View style={styles.topRightCon}>
              <Text style={styles.topRightCon} numberOfLines={1}>
                {data[itemTime] ? data[itemTime] : ''}
              </Text>
            </View>
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

  isSelect = id => {
    const {editSelectKeyList} = this.props;
    let isState = false;
    for (let items in editSelectKeyList) {
      if (editSelectKeyList[items].id === id) {
        isState = true;
      }
    }
    return isState;
  };

  // 列表尾部展示，无数据或者正在加载，或者是空
  _renderFooter = (showFoot = 0) => {
    if (showFoot === 1) {
      return (
        <View
          style={{
            height: 30,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Text
            style={{
              color: '#999999',
              fontSize: 14,
              marginTop: 5,
              marginBottom: 5,
            }}>
            没有更多数据了
          </Text>
        </View>
      );
    } else if (showFoot === 2) {
      return (
        <View style={styles.footer}>
          <ActivityIndicator />
          <Text>正在加载更多数据...</Text>
        </View>
      );
    } else if (showFoot === 0) {
      return (
        <View style={styles.footer}>
          <Text></Text>
        </View>
      );
    }
  };

  longPressSwitch = item => {
    const {handleLongPress, isEdit, editCallBack} = this.props;
    if (handleLongPress && handleLongPress !== '') {
      if (isEdit) {
        this.setState({showCheck: true});
        this.selectItem(item);
      } else {
        handleLongPress(item);
      }
    }
  };

  handleItem = item => {
    const {handleItemTo} = this.props;
    const {showCheck} = this.state;
    if (handleItemTo && handleItemTo !== '') {
      if (showCheck) {
        this.selectItem(item);
      } else {
        handleItemTo(item);
      }
    }
  };

  selectItem = item => {
    const {editSelectKeyList, changeEditSelect} = this.props;
    const id = item.id;
    let selectList = editSelectKeyList;
    let handleItemIndex = false;
    for (let items in selectList) {
      if (selectList[items].id === id) {
        handleItemIndex = items;
      }
    }
    if (handleItemIndex || String(handleItemIndex) === '0') {
      selectList.splice(handleItemIndex, 1);
    } else {
      selectList.push(item);
    }
    changeEditSelect(selectList);
  };

  allSelect = () => {
    const {data, editSelectKeyList, changeEditSelect} = this.props;
    const newData = [...data];
    if (data && editSelectKeyList && editSelectKeyList.length === data.length) {
      changeEditSelect([]);
    } else {
      changeEditSelect(newData);
    }
  };

  colseCheck = () => {
    const {changeEditSelect} = this.props;
    this.setState({showCheck: false});
    changeEditSelect([]);
  };

  render() {
    const {data, showFoot, upLoadData, editSelectKeyList, footerJson} =
      this.props;
    const {showCheck} = this.state;
    return (
      <View>
        {showCheck ? (
          <View style={styles.editTop}>
            <View style={styles.editTopContent}>
              <TouchableWithoutFeedback onPress={this.allSelect}>
                <View style={styles.edithandle}>
                  <Text style={styles.editIcon}>
                    <Icon
                      name={'xuanze2'}
                      size={22}
                      color={
                        data &&
                        editSelectKeyList &&
                        editSelectKeyList.length === data.length
                          ? '#1890ff'
                          : '#e8e8e8'
                      }
                    />
                  </Text>
                  <Text style={styles.editTitle}>
                    {data &&
                    editSelectKeyList &&
                    editSelectKeyList.length === data.length
                      ? '取消全选'
                      : '全选'}
                  </Text>
                </View>
              </TouchableWithoutFeedback>

              <Text style={styles.editContent}>
                已选择
                {editSelectKeyList && editSelectKeyList.length > 0
                  ? editSelectKeyList.length
                  : 0}
                项
              </Text>
            </View>
            <View>
              <TouchableWithoutFeedback onPress={this.colseCheck}>
                <Text style={styles.colseCheck}>取消</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        ) : null}
        <FlatList
          data={data}
          refreshing={false}
          ListEmptyComponent={<NotData iconCode={'\ue6b6'} describeTest={''} />}
          onEndReachedThreshold={0.1}
          onEndReached={() => {
            upLoadData ? upLoadData() : '';
          }}
          ListFooterComponent={this._renderFooter(showFoot)}
          renderItem={({item}) => {
            return (
              <TouchableNativeFeedback
                key={item.id}
                onPress={() => {
                  this.handleItem(item);
                }}
                onLongPress={() => {
                  this.longPressSwitch(item);
                }}>
                <View>{this.Items(item)}</View>
              </TouchableNativeFeedback>
            );
          }}
        />
      </View>
    );
  }
}
