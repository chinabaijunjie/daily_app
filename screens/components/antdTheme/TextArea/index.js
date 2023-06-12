import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {TextareaItem} from '@ant-design/react-native';
import {commonStyle} from '../../commonStyle';

export default class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textareaValue: '',
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let obj = null;
    if (
      nextProps.defaultValue &&
      nextProps.defaultValue !== prevState.textareaValue
    ) {
      obj = {
        textareaValue: nextProps.defaultValue,
      };
    }
    return obj;
  }

  changeArea = text => {
    const {onChange} = this.props;
    onChange(text);
    this.setState({textareaValue: text});
  };

  render() {
    const {textareaValue} = this.state;
    const {isRequire, title, placeholder} = this.props;
    return (
      <View style={styles.submitBoxRemark}>
        {title ? (
          <View style={styles.handleTitle}>
            <Text style={styles.handleTitle}>
              {isRequire ? <Text style={{color: '#f5222d'}}>*</Text> : null}
              {title}
            </Text>
          </View>
        ) : null}
        <TextareaItem
          defaultValue={textareaValue}
          value={textareaValue}
          placeholder={placeholder}
          style={{
            color: '#8c8c8c',
            borderColor: '#d9d9d9',
            borderWidth: 1,
            height: 80,
          }}
          autoHeight
          rows={2}
          onChange={this.changeArea}
        />
      </View>
    );
  }
}

const windwoWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  replyBox: {
    display: 'flex',
    flexDirection: 'column',
    width: windwoWidth,
    marginBottom: 20,
  },
  replyLine: {
    width: windwoWidth,
    height: 40,
    lineHeight: 40,
  },

  handleBox: {
    display: 'flex',
    flexDirection: 'row',
    width: Dimensions.get('window').width,
  },
  handleTitle: {
    width: 100,
    height: 30,
    lineHeight: 30,
    textAlign: 'left',
    fontSize: 14,
  },
  handleAccBtn: {
    height: 40,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
    ...commonStyle.buttonBg,
    borderRadius: 5,
  },
  handleBtnText: {
    height: 40,
    lineHeight: 35,
    textAlign: 'center',
    fontSize: 22,
    color: '#fff',
  },
  submitBoxRemark: {
    padding: 20,
    paddingTop: 10,
    flex: 1,
  },
});
