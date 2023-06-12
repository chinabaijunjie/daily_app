import React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';
import Icon from '../../Icon/';

export default class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectObj: {},
      selectKey: '',
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let data = {};
    const {defaultValue} = nextProps;
    if (
      defaultValue !== '' &&
      String(defaultValue) !== 'undefined' &&
      String(defaultValue) !== 'null'
    ) {
      if (prevState.selectKey !== defaultValue) {
        data = {
          selectKey: defaultValue,
        };
      }
    }
    return {
      ...data,
    };
  }

  componentDidMount() {
    const {defaultValue} = this.props;
    if (
      defaultValue !== '' &&
      String(defaultValue) !== 'undefined' &&
      String(defaultValue) !== 'null'
    ) {
      this.setState({selectKey: defaultValue});
    }
  }

  changeDecision = obj => {
    const {changeRadio} = this.props;
    this.setState({
      selectKey: obj.flowValue,
      selectObj: obj,
    });
    changeRadio({
      value: obj.flowValue,
      obj: obj,
    });
  };

  render() {
    const {radioJson} = this.props;
    const {selectKey} = this.state;
    return (
      <View style={styles.handleBox}>
        {radioJson &&
          radioJson.length > 0 &&
          radioJson.map(item => {
            return (
              <TouchableWithoutFeedback
                key={item.flowValue}
                onPress={() => {
                  this.changeDecision(item);
                }}>
                <View style={styles.throughDecision}>
                  <Text style={styles.iconBox}>
                    <Icon
                      name={
                        selectKey &&
                        selectKey !== '' &&
                        item.flowValue === selectKey
                          ? 'danxuan3'
                          : 'danxuan2'
                      }
                      size={16}
                      color={
                        item.flowValue === selectKey
                          ? item.color
                            ? item.color
                            : '#1890ff'
                          : '#ccc'
                      }
                    />
                  </Text>
                  <Text style={styles.describe}>{item.flowName}</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  handleBox: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 1,
  },
  throughDecision: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    height: 40,
    lineHeight: 40,
    marginLeft: 10,
  },
  iconBox: {
    width: 40,
    height: 40,
    lineHeight: 50,
    textAlign: 'center',
  },
  describe: {
    width: 90,
    height: 40,
    lineHeight: 50,
    fontSize: 14,
    textAlign: 'left',
  },
  textareaBox: {
    display: 'flex',
    flexDirection: 'row',
  },
  areaTitle: {
    width: 99,
    height: 40,
    lineHeight: 40,
    fontSize: 16,
    textAlign: 'right',
  },
  textArea: {
    flex: 1,
  },
});
