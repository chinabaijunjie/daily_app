# modal 组件

参数：6个
  必填: visible, closeModel, children
  非必填: positionStyle, contentStyle, offectSize

  必填{
    visible: modal 是否出现【true，false】
    closeModel: 关闭modal的回调【用于点击模态或者点击modal内容关闭modal】
    children: 展示的内容
  }
  非必填{
    positionStyle: 这里可以设置modal的样式，调整modal的位置等等，【参考 component/antdTheme/dropDown/index】
    contentStyle: modal内容外层的样式【参考 component/antdTheme/dropDown/index】
    offectSize: 内容的padding
  }


