import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  itemBox: {
    display: 'flex',
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    height: 50,
    lineHeight: 50,
  },
  iconBox: {
    marginRight: 10,
    marginLeft: 10,
    width: 48,
    height: 48,
    lineHeight: 48,
    textAlign: 'center',
    borderRadius: 6,
  },
  contentBox: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 0.5,
  },
  TitleAndTime: {
    display: 'flex',
    flexDirection: 'row',
    height: 22,
    lineHeight: 22,
    fontSize: 14,
    marginTop: 3,
    position: 'relative',
  },
  bottomContent: {
    width: Dimensions.get('window').width - 88,
    height: 22,
    lineHeight: 22,
    fontSize: 14,
    marginRight: 10,
    color: '#8c8c8c',
  },
  topTitle: {
    width: Dimensions.get('window').width - 100 - 95,
    height: 20,
    fontSize: 14,
    color: '#262626',
  },
  topTitleDownLoad: {
    width: Dimensions.get('window').width - 100 - 75 - 20,
    height: 20,
    fontSize: 14,
    color: '#262626',
  },
  topTime: {
    width: 70,
    height: 20,
    fontSize: 12,
    color: '#bfbfbf',
    textAlign: 'right',
  },
  topRightCon: {
    width: 120,
    height: 20,
    fontSize: 12,
    color: '#bfbfbf',
    textAlign: 'right',
    paddingRight: 5,
  },
  footer: {
    flexDirection: 'row',
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  isReadBox: {
    width: 30,
  },

  isRead: {
    fontSize: 10,
    color: '#999',
    textAlign: 'right',
  },
  isNotRead: {
    fontSize: 10,
    color: 'red',
    textAlign: 'right',
  },

  // 列表编辑
  editTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width,
    height: 40,
    lineHeight: 40,
  },
  editTopContent: {
    display: 'flex',
    flexDirection: 'row',
    width: 200,
    height: 40,
    lineHeight: 40,
    marginLeft: 20,
  },
  edithandle: {
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    lineHeight: 40,
  },
  editIcon: {
    width: 22,
    height: 40,
    lineHeight: 40,
  },
  editTitle: {
    height: 40,
    lineHeight: 40,
    paddingLeft: 10,
    fontSize: 18,
    color: '#595959',
  },
  editContent: {
    marginLeft: 5,
    height: 40,
    lineHeight: 40,
    color: '#bfbfbf',
    fontSize: 12,
  },
  colseCheck: {
    height: 40,
    lineHeight: 40,
    paddingRight: 20,
    fontSize: 18,
    color: '#595959',
  },

  // --------------------------- listUploadCard style: start ----------------------------
  cardBox: {
    position: 'relative',
    marginLeft: 10,
    marginTop: 7,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 20,
    borderRadius: 5,
  },
  cardChildBox: {
    marginRight: 10,
    marginLeft: 10,
  },
  cardLine: {
    display: 'flex',
    flexDirection: 'row',
    width: Dimensions.get('window').width - 20,
    height: 24,
    lineHeight: 24,
  },
  cardTitle: {
    height: 24,
    lineHeight: 24,
    fontSize: 16,
    color: '#000',
  },
  cardContent: {
    flex: 1,
    height: 24,
    lineHeight: 24,
    paddingRight: 10,
    color: '#8c8c8c',
  },
  handle: {
    position: 'absolute',
    top: -0.5,
    right: -0.5,
    width: 0,
    height: 0,

    borderStyle: 'solid',
    borderLeftWidth: 20,
    borderLeftColor: 'transparent',

    borderRightWidth: 0,
    borderRightColor: '#f5222d',

    borderTopWidth: 20,
    borderTopColor: '#f5222d',

    borderBottomWidth: 20,
    borderBottomColor: 'transparent',
    borderRadius: 5,
  },

  notifyManageStyle: {
    width: Dimensions.get('window').width,
    marginTop: 10,
    height: 54,
    lineHeight: 54,
    fontSize: 18,
    color: '#8c8c8c',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  notifyBorderStyle: {
    position: 'relative',
    marginLeft: 10,
    marginTop: 2,
    width: 48,
    height: 48,
    backgroundColor: '#1890ff',
    borderRadius: 6,
  },

  notifyImageStyle: {
    position: 'absolute',
    left: 7,
    top: 6,
    height: 36,
    display: 'flex',
    width: 36,
  },

  notifyTextBox: {
    width: Dimensions.get('window').width - 80,
    marginLeft: 20,
    fontSize: 16,
    color: '#8c8c8c',
    height: 50,
  },
  notifyTopBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  notifyTitleStyle: {
    width: 68,
    height: 25,
  },
  topTextStyle: {
    fontSize: 16,
    height: 25,
    lineHeight: 25,
  },

  notifyCompanyStyle: {
    width: 170,
    height: 25,
  },
  notifyDateStyle: {
    width: 80,
    fontSize: 10,
    height: 25,
    lineHeight: 25,
  },
  dateStyle: {
    width: 80,
    marginLeft: 4,
    fontSize: 12,
    height: 25,
    lineHeight: 25,
    color: '#b8b8b8',
  },

  notifyBottomBox: {
    width: Dimensions.get('window').width - 80,
    marginBottom: 2,
    fontSize: 16,
    color: '#8c8c8c',
    height: 25,
  },
  notifyMsgStyle: {
    width: Dimensions.get('window').width - 80,
    fontSize: 14,
    color: '#989898',
    marginBottom: 2,
    height: 25,
    lineHeight: 25,
  },
  // 新消息
  newNotifyBox: {
    position: 'absolute',
    left: 49,
    top: -2,
    width: 14,
    height: 14,
    backgroundColor: 'red',
    borderRadius: 7,
    zIndex: 10,
  },
  unReadNumStyle: {
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
    lineHeight: 14,
    // fontFamily: ''
  },
  announceTop: {
    position: 'absolute',
    top: -0.5,
    right: -0.5,
    width: 0,
    height: 0,

    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderLeftColor: 'transparent',

    borderRightWidth: 0,
    borderRightColor: '#f5222d',

    borderTopWidth: 10,
    borderTopColor: '#f5222d',

    borderBottomWidth: 10,
    borderBottomColor: 'transparent',
  },

  /* 左拉操作 */
  renderSwipe: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
  },
  renderSwipeLeft:{
    width:"50%",
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },  
  renderSwipeRight:{
    width:"50%",
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },  
  swipeCard: {
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    marginBottom:10
  },
  swipeChildBox:{
    margin:10
  }
});

export default styles;
