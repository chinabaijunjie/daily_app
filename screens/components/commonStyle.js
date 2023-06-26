import { StyleSheet, Dimensions } from 'react-native';

// 当前这里包含的样式有：分页器的样式，和列表前方图标的外面的壳子iconBox，中等列表图标iconsMd，较小列表图标icons
export const commonStyle = StyleSheet.create({
  // 分页
  genPaginationCtrl: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    lineHeight: 50,
    height: 50,
    width: Dimensions.get('window').width,
  },
  paginationIcon: {
    width: 35,
    height: 30,
  },

  // icon样式
  icons: {
    width: 22,
    height: 22,
    fontSize: 22,
    color: '#fff',
    fontFamily: 'iconfont',
  },
  iconsMd: {
    width: 39,
    height: 39,
    fontSize: 39,
    color: '#fff',
    fontFamily: 'iconfont',
  },
  iconBox: {
    marginRight: 10,
    width: 45,
    height: 45,
    lineHeight: 45,
    textAlign: 'center',
    borderRadius: 23,
  },

  // 布局样式 flex布局规则【容器中的所有的view都有宽高的时候，才会安照flex的布局方式来】
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  scrollContainer: {
    marginTop: 50,
    width: Dimensions.get('window').width,
    flex: 1,
  },
  // modalTitle
  modalTitle: {
    height: 40,
    lineHeight: 40,
    fontSize: 16,
    color: '#bfbfbf',
    textAlign: 'left',
  },

  // 一级列表头背景色
  detailLineBgFirstLive: {
    backgroundColor: '#91d5ff',
  },
  // 二级列表头背景色
  detailLineBgsecondary: {
    backgroundColor: '#87e8de',
  },
  // 一般那内容背景色
  detailLineConBg: {
    backgroundColor: '#e5f5ff',
  },
  /**
   * 按钮背景颜色和字体颜色
   */
  buttonBg: {
    backgroundColor: '#1890ff',
    color: '#fff',
  },
  // 详情字体共同的大小
  detailComFontSize: {
    fontSize: 14,
  },
  // 提醒详情页字体
  detailTitleFont: {
    marginTop: 10,
    fontSize: 16,
    color: 'black'
  },
  detailMsgFont: {
    fontSize: 14,
    color: '#959595'
  },
  detailContainer: {
    width: Dimensions.get('window').width,
    flex: 1,
  },
});