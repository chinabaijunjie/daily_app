### table 组件

# 5个参数：columns 和 data 是必填的
          tabTitleBg 、 tabContentBg 、 marginLAndR 是非必填，默认值分别为【#ccc , #f5f5f5, 20】
  tabTitleBg: 是表格头部的背景颜色
  tabContentBg: 是表格内容区域的背景颜色
  marginLAndR: 是表格左右两侧的margin

columns 案例

const columns = [
  {
    title: '处理时间',
    dataIndex: 'checkTime',
  },
  {
    title: '回复内容',
    dataIndex: 'replyContent'
  },
  {
    title: '处理人',
    dataIndex: 'checkPerson'
  }
];

data 数据【数组格式的数据】


