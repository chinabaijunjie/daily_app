## ListDownLoad
## 列表组件 下拉刷新  当前可传入的参数 data, refresh, onRefresh, handleItemTo, itemTitle, itemTime, itemContent, iconName, iconBg

data: 列表显示的数据

# refresh: 下来刷新时的图标是否出现
# onRefresh: 下拉刷新时执行的方法
handleItemTo: 点击list中的某一个时的回调，会返回当前点击的这个列的数据
handleLongPress: list中的某一个长按时的回调，会返回当前点击的这个列的数据

itemTitle: 列表显示的title 【传入的是它在data的 某一个的 key】
itemTime: 列表显示的时间  传入的是它在data的 某一个的  时间的key】
itemContent: 列表显示的简介

iconName: 列表前方的icon的名字 【取值方式，在iconfont项目中，找到你要的图标，把图标名字去掉前面的 icon 就是 名字】
iconBg: 列表前方的icon的北京的颜色


-------------------------------------------分割线-----------------------------------------------


## ListUpload
## 列表组件 上拉加载   当前可传入的参数 data, showFoot, upLoadData, handleItemTo, handleLongPress, itemTitle, itemTime, itemContent, iconName, iconBg

data: 列表显示的数据

# showFoot: 上拉时的状态：0:空 1:没有更多数据 2:正在加载
# upLoadData: 上拉加载时执行的方法
handleItemTo: 点击list中的某一个时的回调，会返回当前点击的这个列的数据
handleLongPress: list中的某一个长按时的回调，会返回当前点击的这个列的数据

itemTitle: 列表显示的title 【传入的是它在data的 某一个的 key】
itemTime: 列表显示的时间  传入的是它在data的 某一个的  时间的key】
itemContent: 列表显示的简介

iconName: 列表前方的icon的名字 【取值方式，在iconfont项目中，找到你要的图标，把图标名字去掉前面的 icon 就是 名字】
iconBg: 列表前方的icon的北京的颜色


-------------------------------------------分割线-----------------------------------------------


## FlatListUpLoadCard
## 列表组件 上拉加载，下拉刷新；当前可传入的参数：data, refresh, onRefresh,  showFoot, upLoadData, handleItemTo, handleLongPress, cardJson, handleUserKey

data: 列表显示的数据
refresh: 值为boolean类型，当为true时显示下拉的 loading【非必传】
onRefresh: 函数方法，这个与refresh配套使用【非必传】
showFoot: 上拉时的状态：0:空 1:没有更多数据 2:正在加载
upLoadData: 上拉加载时执行的方法
handleItemTo: 点击list中的某一个时的回调，会返回当前点击的这个列的数据
handleLongPress: list中的某一个长按时的回调，会返回当前点击的这个列的数据
cardJson: 列表展示的card具体格式查看 demoList
handleUserKey: 一个放在data 里面的key,通过这个key 拿到data的数据，和当前用户 userID 比较，相同则显示右上角标志

const demoList = [
  {
    title: '工单编号',
    value: 'id'
  },
  {
    title: '工单状态',
    value: 'stateName'
  },
  {
    title: '代维公司',
    value: 'agentDepartmentName',
  },
  {
    title: '建单人',
    value: 'createrName'
  },
  {
    title: '接单人',
    value: 'agenterName'
  },
  {
    title: '建单时间',
    value: 'createTime'
  },
]


-------------------------------------------分割线-----------------------------------------------


## 编辑列表的使用 从 ListUpLoad基础上添加下面的三个
<FlatListUpLoadEdit
  data={listData}
  showFoot={showFoot}
  handleItemTo={this.checkDetails}
  handleLongPress={this.handleLongPress}
  upLoadData={this.upLoadGetData}
  isEdit={true} // 这里传 true 或者 false， 表示是否列表可以编辑  【添加这个】
  editSelectKeyList={editSelectKeyList} // 编辑列表时，选中的数据  【添加这个】
  changeEditSelect={this.changeEditSelect} // 选择列表的change事件回调  【添加这个】
  itemTitle={'contractName'}
  itemTime={'beginDate'}
  itemContent={'bussinessTypeName'}
  iconName={'hetong'}
  iconBg={'#1890ff'}
/>


-------------------------------------------分割线-----------------------------------------------
## 左滑编辑/删除/其他操作 组件使用

# eg:
<FlatListUpLoadCardSwipe
  data,                       
  refresh,
  onRefresh,
  showFoot,
  upLoadData,
  handleItemTo,
  handleLongPress,
  cardJson,
  handleUserKey,
  rightBtnList,
  leftBtnList,
  rightOpenValue,
  leftOpenValue,
  disableLeft,
  disableRight
/>


data: 列表显示的数据
refresh: 值为boolean类型，当为true时显示下拉的 loading【非必传】
onRefresh: 函数方法，这个与refresh配套使用【非必传】
showFoot: 上拉时的状态：0:空 1:没有更多数据 2:正在加载
upLoadData: 上拉加载时执行的方法
handleItemTo: 点击list中的某一个时的回调，会返回当前点击的这个列的数据
handleLongPress: list中的某一个长按时的回调，会返回当前点击的这个列的数据
cardJson: 列表展示的card具体格式查看 demoList
handleUserKey: 一个放在data 里面的key,通过这个key 拿到data的数据，和当前用户 userID 比较，相同则显示右上角标志
leftBtnList: 左滑编辑/删除/其他操作的展示按钮 具体格式看 leftBtnList 【非必传】
rightBtnList: 右滑编辑/删除/其他操作的展示按钮 具体格式看 rightBtnList 【非必传】
rightOpenValue：左滑偏移值，需要配合按钮的宽度使用，如果有两个且按钮的宽度都为75，则该值应为150（由所有按钮的宽度值相加得到的）该值应为负数【非必传】 默认值为120
leftOpenValue：右滑偏移值，需要配合按钮的宽度使用，如果有两个且按钮的宽度都为75，则该值应为150（由所有按钮的宽度值相加得到的）该值应为正数【非必传】 默认值为120
disableLeft：是否禁止左滑 【非必传】 默认禁止
disableRight：是否禁止右滑 【非必传】 默认禁止


const demoList = [
  {
    title: '工单编号',
    value: 'id'
  },
  {
    title: '工单状态',
    value: 'stateName'
  },
]

const leftBtnList = [
   {
    width: 75, --- 宽度
    bgColor: '#1890ff',  --- 按钮背景颜色
    text: '删除',  --- 按钮内容
    fontSize: 28,  --- 按钮字体大小
    fontColor: 'red',  --- 按钮颜色
    textAlign: 'right',  --- 按钮对齐方式
    onPress: () => {  --- 按钮点击事件
      console.log('11111'); 
    },
    {
    width: 75,
    bgColor: '#1890ff',
    text: '删除',
    fontSize: 28,
    fontColor: 'red',
    textAlign: 'right',
    onPress: () => {
      console.log('11111');
    },
]
const rightBtnList = [
   {
    width: 75, --- 宽度
    bgColor: '#1890ff',  --- 按钮背景颜色
    text: '删除',  --- 按钮内容
    fontSize: 28,  --- 按钮字体大小
    fontColor: 'red',  --- 按钮颜色
    textAlign: 'right',  --- 按钮对齐方式
    onPress: () => {  --- 按钮点击事件
      console.log('11111'); 
    },
    {
    width: 75,
    bgColor: '#1890ff',
    text: '删除',
    fontSize: 28,
    fontColor: 'red',
    textAlign: 'right',
    onPress: () => {
      console.log('11111');
    },
]

-------------------------------------------分割线-----------------------------------------------