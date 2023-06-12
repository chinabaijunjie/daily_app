import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 表格内容行
  tabRow = (data, index) => {
    const {tabContentBg = '#f5f5f5', columns} = this.props;
    return (
      <View
        key={index}
        style={[styles.tableTr, {backgroundColor: tabContentBg}]}>
        {columns &&
          columns.length > 0 &&
          columns.map(item => {
            return (
              <View key={item.dataIndex} style={[styles.tableConTd]}>
                <Text style={[styles.tableConTd, {fontSize: 12}]}>
                  {data &&
                  (data[item.dataIndex] || String(data[item.dataIndex]) === '0')
                    ? data[item.dataIndex]
                    : '--'}
                </Text>
              </View>
            );
          })}
      </View>
    );
  };

  render() {
    const windowWidth = Dimensions.get('window').width;
    const {tabTitleBg = '#ccc', marginLAndR = 20, columns, data} = this.props;
    return (
      <View
        style={[
          styles.table,
          {
            marginLeft: marginLAndR,
            marginRight: marginLAndR,
            width: windowWidth - 2 * marginLAndR,
            paddingBottom: 0.5,
          },
        ]}>
        {/* 表格表头 */}
        <View style={[styles.tableTr, {backgroundColor: tabTitleBg}]}>
          {columns &&
            columns.length > 0 &&
            columns.map(item => {
              return (
                <View key={item.dataIndex} style={[styles.tableTd]}>
                  <Text style={[styles.tableTd, {fontSize: 12}]}>
                    {item.title}
                  </Text>
                </View>
              );
            })}
        </View>
        {/* 表格内容 */}
        <View style={styles.tabCon}>
          {data &&
            data.length > 0 &&
            data.map((item, index) => this.tabRow(item, index))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  table: {
    display: 'flex',
    flexDirection: 'column',
    borderLeftColor: '#8c8c8c',
    borderLeftWidth: 0.5,
    borderBottomColor: '#8c8c8c',
    borderBottomWidth: 0.5,
  },
  tableTr: {
    display: 'flex',
    flexDirection: 'row',
    borderTopColor: '#8c8c8c',
    borderTopWidth: 0.5,
  },
  tableTd: {
    width: (Dimensions.get('window').width - 40) / 3,
    lineHeight: 20,
    textAlign: 'center',
    flexWrap: 'wrap',
    borderRightColor: '#8c8c8c',
    borderRightWidth: 0.5,
  },
  tableConTd: {
    width: (Dimensions.get('window').width - 40) / 3,
    lineHeight: 20,
    textAlign: 'center',
    flexWrap: 'wrap',
    borderRightColor: '#8c8c8c',
    borderRightWidth: 0.5,
    paddingRight: 3,
  },
  tabCon: {
    display: 'flex',
    flexDirection: 'column',
  },
  tabConItem: {
    width: (Dimensions.get('window').width - 40) / 3,
    lineHeight: 20,
    backgroundColor: '#ccc',
    textAlign: 'center',
    flexWrap: 'wrap',
  },
});
