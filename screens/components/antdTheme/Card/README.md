## Card 卡片组件

参数
list, data, cardBg='#ccc', cardContentBg='#fff', titleColor='#595959', contentColor='#bfbfbf', contentLineNum=2

1、list: 当前卡片展示的内容，数组格式
2、data: 卡片数据，对象格式
3、cardBg: 卡片所在位置的背景颜色【默认 #ccc】
4、cardContentBg: 卡片内容的背景颜色，于卡片背景颜色不同，显示出卡片的存在【默认#fff】
5、titleColor: 卡片标题的字体颜色【默认#000
6、contentColor: 卡片内容的字体颜色【默认#8c8c8c】
7、contentLineNum: 卡片内容可以展示多少行，然后隐藏【默认2】


const list = [
  {
    title: '班次',
    value: 'scheduleSectionName',
    type: 'nowarp', // 卡片的内容不换行
    titleColor: '#907', // 当前这一行显示title的颜色，也可以没有，就是上面默认的卡片统一的titleColor的颜色
    contentColor: '#478', // 当前这一行显示文字内容的颜色，也可以没有，就是上面默认的卡片统一的contentColor的颜色
  },
  {
    title: '班次',
    value: 'scheduleSectionName',
    type: 'warp', // 卡片的内容换行
    titleColor: '#420', // 当前这一行显示title的颜色，也可以没有，就是上面默认的卡片统一的titleColor的颜色
    contentColor: '#517', // 当前这一行显示文字内容的颜色，也可以没有，就是上面默认的卡片统一的contentColor的颜色
  },
  {
    title: '性别',
    value: 'sex',
    type: 'switch', // 卡片的内容换行
    list: [
      {
        key: '0',
        value: '待接收',
        titleColor: '#793', // 是0时显示title的颜色，也可以没有，就是上面默认的卡片统一的titleColor的颜色
        contentColor: '#229', // 文字【待接收】的颜色，也可以没有，就是上面默认的卡片统一的contentColor的颜色
      },
      {
        key: '1',
        value: '处理中',
        titleColor: '#167', // 是0时显示title的颜色，也可以没有，就是上面默认的卡片统一的titleColor的颜色
        contentColor: '#270', // 文字【待接收】的颜色，也可以没有，就是上面默认的卡片统一的contentColor的颜色
      },
    ]
  },
];

使用案例
<Card list={list} data={对象} cardBg={'#ccc'} cardContentBg={'#fff'} titleColor={'#595959'} contentColor={'#bfbfbf'} contentLineNum={2} >
  <View>
    <Text>lkngfgnng</Text>
  </View> // 这一块的内容最追加到卡片的最后

</Card>

