import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';

export default class Fold extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFold: false,
    };
  }

  changeFold = () => {
    const {showFold} = this.state;
    this.setState({showFold: !showFold});
  };

  render() {
    const {showFold} = this.state;
    const {children, title, editTitle, onPress} = this.props;
    return (
      <View style={showFold ? styles.foldingBoxShow : styles.foldingBox}>
        {editTitle ? (
          <View style={styles.editfold}>
            <TouchableWithoutFeedback onPress={this.changeFold}>
              <View
                style={
                  showFold ? styles.foldingActiveEdit : styles.foldingEdit
                }>
                <Text style={styles.title}>{title}</Text>
                <Text
                  style={
                    showFold ? styles.cssIconBottom : styles.cssIconRight
                  }></Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={onPress}>
              <View
                style={[
                  styles.editfoldBtn,
                  showFold
                    ? {backgroundColor: '#91d5ff'}
                    : {backgroundColor: '#fff'},
                ]}>
                <Text style={styles.editfoldBtn}>编辑</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        ) : (
          <TouchableWithoutFeedback onPress={this.changeFold}>
            <View style={showFold ? styles.foldingActive : styles.folding}>
              <Text style={styles.title}>{title}</Text>
              <Text
                style={
                  showFold ? styles.cssIconBottom : styles.cssIconRight
                }></Text>
            </View>
          </TouchableWithoutFeedback>
        )}

        <View style={showFold ? {} : {height: 0, overflow: 'hidden'}}>
          {children}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  editfold: {
    display: 'flex',
    flexDirection: 'row',
  },
  editfoldBtn: {
    width: 40,
    height: 40,
    lineHeight: 40,
    color: '#1890ff',
  },

  foldingActiveEdit: {
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#91d5ff',
    width: Dimensions.get('window').width - 40,
  },
  foldingEdit: {
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 40,
  },
  foldingBox: {
    width: Dimensions.get('window').width,
    borderBottomColor: '#d9d9d9',
    borderBottomWidth: 1,
  },
  foldingBoxShow: {
    width: Dimensions.get('window').width,
    borderBottomColor: '#91d5ff',
    borderBottomWidth: 1,
  },
  folding: {
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#fff',
  },
  foldingActive: {
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#91d5ff',
  },
  title: {
    flex: 1,
    height: 40,
    lineHeight: 40,
    fontSize: 16,
    color: '#000000',
    marginLeft: 20,
    textAlign: 'left',
  },
  cssIconRight: {
    position: 'absolute',
    top: 15,
    right: 15,
    width: 0,
    height: 0,

    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderLeftColor: '#bfbfbf',

    borderRightWidth: 0,
    borderRightColor: '#bfbfbf',

    borderTopWidth: 5,
    borderTopColor: 'transparent',

    borderBottomWidth: 5,
    borderBottomColor: 'transparent',
  },
  cssIconBottom: {
    position: 'absolute',
    top: 15,
    right: 15,
    width: 0,
    height: 0,

    borderStyle: 'solid',
    borderLeftWidth: 5,
    borderLeftColor: 'transparent',

    borderRightWidth: 5,
    borderRightColor: 'transparent',

    borderTopWidth: 10,
    borderTopColor: '#bfbfbf',

    borderBottomWidth: 0,
    borderBottomColor: '#bfbfbf',
  },
});
