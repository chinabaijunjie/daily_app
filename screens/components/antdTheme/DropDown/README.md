# 下拉组件

# 注意，在使用DropDown时，在外层包裹一个有固定的宽度的View。 例如 页面 SelfOrderHisListScreen 这里的使用案例
foldList={foldList} lineHeight={30} positionTop={10} changeSelectTitle={this.changeSelectTitle}
当前组件有两个参数：{
  foldList: 是个JSON数组；前端自定义下拉数据，在下拉中，展示为title，存储为value,
  lineHeight: 是当前下拉区域的行高
  positionTop: 是当前下拉区域小箭头的定位top位置
  changeSelectTitle: 下拉选中新的选项，关闭下拉框，并从这个函数返回新的选中的选项的内容
    例如{
          title: '主题',
          value: 'title',
        }
}

// 下拉数据
const foldList = [
  {
    title: '主题',
    value: 'title',
  },
  {
    title: '申请内容',
    value: 'askContent',
  },
  {
    title: '审批人',
    value: 'assigneeName',
  },
]

{/* <DropDown foldList={foldList} lineHeight={30} positionTop={10} changeSelectTitle={this.changeSelectTitle}/> */}