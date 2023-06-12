import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../../Icon/';

export default class Grad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unfold: true,
    };
  }

  funcNav = _el => {
    if (_el.passParams) {
      this.props.navigation.navigate(_el.url, {..._el.passParams});
    } else {
      this.props.navigation.navigate(_el.url);
    }
  };

  render() {
    const {data, title, columnNum} = this.props;
    const itemWidth = parseInt(
      Dimensions.get('window').width * (1 / columnNum).toFixed(3) - 13,
    );
    const {unfold} = this.state;
    const firstLineData = data && data.length > 4 ? data.slice(0, 4) : data;
    const otherLineData =
      data && data.length > 4 ? data.slice(4, data.length) : [];
    return (
      <View>
        <View style={stylesCon.titleBox}>
          <Text style={stylesCon.funGroupTitle}>{title}</Text>
          {otherLineData.length > 0 ? (
            <View>
              {unfold ? (
                <TouchableWithoutFeedback
                  onPress={() => {
                    this.setState({unfold: false});
                  }}>
                  <Text style={stylesCon.titleRight}>收起</Text>
                </TouchableWithoutFeedback>
              ) : (
                <TouchableWithoutFeedback
                  onPress={() => {
                    this.setState({unfold: true});
                  }}>
                  <Text style={stylesCon.titleRight}>展开</Text>
                </TouchableWithoutFeedback>
              )}
            </View>
          ) : null}
        </View>
        <View style={stylesCon.gradsCon}>
          {firstLineData && firstLineData.length > 0
            ? firstLineData.map((item, index) => {
                return (
                  <View
                    key={item.text}
                    style={{
                      width: itemWidth,
                      padding: 5,
                      textAlign: 'center',
                      height: 100,
                      margin: 5,
                      position: 'relative',
                    }}>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => {
                        this.funcNav(item);
                      }}>
                      <LinearGradient
                        colors={item.bgStyle}
                        style={{
                          ...stylesCon.gradientBox,
                          marginLeft: (itemWidth - 55 - 10) / 2,
                          marginTop: 10,
                        }}>
                        <Text style={stylesCon.gradientBox}>
                          <Icon name={item.icon} size={30} color={'#fff'} />
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                    <Text style={stylesCon.funcText}>{item.text}</Text>
                    {item.badge ? (
                      <Text style={stylesCon.funcBagde}>{item.badge}</Text>
                    ) : null}
                  </View>
                );
              })
            : null}
        </View>
        {unfold ? (
          <View style={stylesCon.gradsCon}>
            {otherLineData && otherLineData.length > 0
              ? otherLineData.map((item, index) => {
                  return (
                    <View
                      key={item.text}
                      style={{
                        width: itemWidth,
                        padding: 5,
                        textAlign: 'center',
                        height: 100,
                        margin: 5,
                      }}>
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                          this.funcNav(item);
                        }}>
                        <LinearGradient
                          colors={item.bgStyle}
                          style={{
                            ...stylesCon.gradientBox,
                            marginLeft: (itemWidth - 55 - 10) / 2,
                            marginTop: 10,
                          }}>
                          <Text style={stylesCon.gradientBox}>
                            <Icon name={item.icon} size={28} color={'#fff'} />
                          </Text>
                        </LinearGradient>
                      </TouchableOpacity>
                      <Text style={stylesCon.funcText}>{item.text}</Text>
                    </View>
                  );
                })
              : null}
          </View>
        ) : null}
      </View>
    );
  }
}

const stylesCon = StyleSheet.create({
  icons: {
    width: 27,
    height: 27,
    fontSize: 27,
    color: '#fff',
    fontFamily: 'iconfont',
  },
  gradientBox: {
    width: 55,
    height: 55,
    lineHeight: 55,
    textAlign: 'center',
    borderRadius: 10,
  },
  gradsCon: {
    flex: 1,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  funcText: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 12,
  },
  titleBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  funGroupTitle: {
    width: 200,
    fontSize: 18,
    lineHeight: 30,
    marginTop: 15,
    fontWeight: '500',
    color: '#222222',
    textAlign: 'left',
  },
  titleRight: {
    marginTop: 15,
    width: 30,
    height: 30,
    lineHeight: 30,
    color: '#8c8c8c',
  },
  funcBagde: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 14,
    height: 14,
    lineHeight: 14,
    textAlign: 'center',
    fontSize: 10,
    borderRadius: 6,
    backgroundColor: '#f5222d',
    color: '#fff',
  },
});
