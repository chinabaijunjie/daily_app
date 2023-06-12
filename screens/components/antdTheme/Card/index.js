import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

// 不可以换行的 暂无使用
function renderNoWarp(item, data, titleColor, contentColor, contentLineNum) {
  return (
    <View style={styles.cardNoWarpLine} key={item.value}>
      <Text
        numberOfLines={1}
        style={[{color: item.titleColor ? item.titleColor : titleColor}]}>
        {item.title}:{' '}
      </Text>
      <Text
        numberOfLines={1}
        style={[
          styles.cardWarpContent,
          {color: item.contentColor ? item.contentColor : contentColor},
        ]}>
        {data[item.value]}
      </Text>
    </View>
  );
}

// 支持换行的
function renderWarp(item, data, titleColor, contentColor, contentLineNum) {
  return (
    <View style={styles.cardWarpLine} key={item.value}>
      <Text numberOfLines={contentLineNum} style={styles.cardWarpTitle}>
        <Text style={[{color: item.titleColor ? item.titleColor : titleColor}]}>
          {item.title}:
        </Text>
        <Text
          style={[
            {
              flex: 1,
              color: item.contentColor ? item.contentColor : contentColor,
            },
          ]}>
          &nbsp;&nbsp;&nbsp;&nbsp;{data[item.value]}
        </Text>
      </Text>
    </View>
  );
}

// switch 数值对应内容
export function renderSwitch(
  item,
  data,
  titleColor,
  contentColor,
  contentLineNum,
) {
  let datas = {...data};
  const key = String(datas[item.value]);
  let content = '';
  let childTitleColor = '';
  let childContentColor = '';
  if (item.list && item.list.length > 0) {
    for (let indexs of item.list) {
      if (String(indexs.key) === String(key)) {
        content = indexs.value;
        childTitleColor = indexs.titleColor ? indexs.titleColor : titleColor;
        childContentColor = indexs.contentColor
          ? indexs.contentColor
          : contentColor;
      }
    }
  }
  return (
    <View style={styles.cardNoWarpLine} key={`${item.value}${Math.random()}`}>
      <Text numberOfLines={1} style={[{color: childTitleColor}]}>
        {item.title}:{' '}
      </Text>
      <Text
        numberOfLines={1}
        style={[styles.cardWarpContent, {color: childContentColor}]}>
        {content}
      </Text>
    </View>
  );
}

const Card = ({
  list,
  data,
  cardBg = '#ccc',
  cardContentBg = '#fff',
  titleColor = '#000',
  contentColor = '#8c8c8c',
  contentLineNum = 2,
  children,
}) => {
  return (
    <View style={[styles.cardBox, {backgroundColor: cardBg}]}>
      <View style={[styles.cardContent, {backgroundColor: cardContentBg}]}>
        {list && list.length > 0
          ? list.map(item => {
              return item.type === 'warp'
                ? renderWarp(
                    item,
                    data,
                    titleColor,
                    contentColor,
                    contentLineNum,
                  )
                : item.type === 'nowarp'
                ? renderNoWarp(
                    item,
                    data,
                    titleColor,
                    contentColor,
                    contentLineNum,
                  )
                : item.type === 'switch'
                ? renderSwitch(
                    item,
                    data,
                    titleColor,
                    contentColor,
                    contentLineNum,
                  )
                : null;
              // return renderWarp(item, data, titleColor, contentColor, contentLineNum)
            })
          : null}
        {children}
      </View>
    </View>
  );
};
export default Card;

const styles = StyleSheet.create({
  cardBox: {
    paddingTop: 10,
    paddingRight: 15,
    paddingLeft: 15,
    width: Dimensions.get('window').width,
    minHeight: 20,
  },
  cardContent: {
    padding: 5,
    width: Dimensions.get('window').width - 30,
    borderRadius: 5,
  },
  cardNoWarpLine: {
    display: 'flex',
    flexDirection: 'row',
    height: 20,
    lineHeight: 20,
  },
  cardWarpLine: {
    display: 'flex',
    flexDirection: 'row',
  },
  cardTitle: {
    width: 100,
    height: 20,
    lineHeight: 20,
  },
  cardWarpTitle: {
    // display: 'flex',
    // flexDirection: 'row',
    width: Dimensions.get('window').width - 40,
    lineHeight: 20,
  },
  cardNoWarpContent: {
    width: Dimensions.get('window').width - 120 - 40,
    height: 20,
    lineHeight: 20,
  },
  cardWarpContent: {
    width: Dimensions.get('window').width - 50,
    lineHeight: 20,
  },
});
