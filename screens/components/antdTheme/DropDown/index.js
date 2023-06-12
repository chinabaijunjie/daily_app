import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  findNodeHandle,
  UIManager,
  TouchableNativeFeedback,
} from 'react-native';
import {Modal} from '../Modal';

import {styles} from './style';

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFold: false,
      foldChildWidth: 0,
      foldChildHeight: 0,
      foldChildTop: 0,
      foldChildLeft: 0,
      selectTitle: '',
    };
  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    const {foldList} = this.props;
    if (foldList && foldList.length) {
      this.setState({selectTitle: foldList[0].name});
    }
  }

  changeFoldState = () => {
    const {showFold} = this.state;
    console.log('点击点击待机');
    this.setState({showFold: !showFold});
  };

  onLayout = () => {
    const handle = findNodeHandle(this.progressBar);
    setTimeout(() => {
      UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
        // console.log(x, y, width, height, pageX, pageY)
        this.setState({
          foldChildWidth: width,
          foldChildHeight: height,
          foldChildTop: pageY,
          foldChildLeft: pageX,
        });
      });
    }, 10);
  };

  handleChild = item => {
    // console.log('item ==================>', item);
    this.setState({showFold: false, selectTitle: item.name});
    this.props.changeSelectTitle(item);
  };

  closeModel = () => {
    this.setState({showFold: false});
  };

  render() {
    const {foldList, lineHeight, positionTop} = this.props;
    const {
      showFold,
      foldChildWidth,
      foldChildHeight,
      foldChildTop,
      foldChildLeft,
      selectTitle,
    } = this.state;
    const modalStyle = {
      position: 'absolute',
      top: foldChildTop,
      left: foldChildLeft,
      padding: 0,
      paddingTop: foldChildHeight,
      backgroundColor: 'rgba(89, 89, 89, 0)',
    };
    const contentStyle = {
      paddingTop: 0,
      paddingBottom: 0,
      borderRadius: 0,
    };
    return (
      <View style={styles.foldingBox}>
        <TouchableWithoutFeedback onPress={this.changeFoldState}>
          <View
            style={styles.foldingContent}
            ref={c => {
              this.progressBar = c;
            }}
            onLayout={this.onLayout}>
            <View style={styles.foldingText}>
              <Text
                style={[
                  styles.foldingText,
                  {paddingLeft: 5, paddingRight: 5},
                  lineHeight
                    ? {lineHeight: lineHeight, height: lineHeight}
                    : {},
                ]}>
                {selectTitle}
              </Text>
            </View>
            <View style={styles.foldingIconBox}>
              <Text
                style={[
                  showFold ? styles.foldingIconBottom : styles.foldingIconRight,
                  {top: positionTop},
                ]}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
        {showFold && foldList && foldList.length > 0 ? (
          <Modal
            visible={showFold}
            closeModel={this.closeModel}
            positionStyle={modalStyle}
            contentStyle={contentStyle}>
            <View style={styles.foldListCon}>
              {foldList &&
                foldList.length > 0 &&
                foldList.map(item => (
                  <View
                    key={item.id}
                    style={[
                      styles.foldListChild,
                      styles.foldListChildBor,
                      {width: foldChildWidth},
                    ]}>
                    <TouchableNativeFeedback
                      onPress={() => {
                        this.handleChild(item);
                      }}>
                      <Text style={[styles.foldListChild, {paddingLeft: 5}]}>
                        {item.name}
                      </Text>
                    </TouchableNativeFeedback>
                  </View>
                ))}
            </View>
          </Modal>
        ) : null}
      </View>
    );
  }
}
