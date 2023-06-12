import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, TextInput} from 'react-native';
import {commonStyle} from '../../commonStyle';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textareaValue: '',
    };
  }

  changeArea = text => {
    const {onChange} = this.props;
    onChange(text);
    this.setState({textareaValue: text});
  };

  render() {
    const {value, title, onChange} = this.props;
    return (
      <View style={[styles.inputBox, styles.bottomBorder]}>
        <View>
          <Text style={styles.label}>{title}</Text>
        </View>
        <View style={styles.doms}>
          <TextInput
            defaultValue={value}
            style={styles.fillInCon}
            placeholder={'请输入' + title}
            onChangeText={text => {
              onChange(text);
            }}
          />
        </View>
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
    fontSize: 16,
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
    width: Dimensions.get('window').width,
  },

  inputBox: {
    display: 'flex',
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: 50,
    fontSize: 16,
    marginLeft: 14,
    paddingRight: 13,
  },
  doms: {
    flex: 1,
    height: 50,
    lineHeight: 50,
  },
  label: {
    width: 100,
    height: 50,
    lineHeight: 50,
    textAlign: 'left',
    fontSize: 14,
  },
  fillInCon: {
    flex: 1,
    height: 50,
    lineHeight: 30,
    fontSize: 14,
    color: '#8c8c8c',
    textAlign: 'right',
    paddingRight: 20,
  },
  bottomBorder: {
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
  },
});
