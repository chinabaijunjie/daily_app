## Radio 单选组件
参数：radioJson 和 changeRadio , defaultValue

radioJson 一个数组对象，子对象内容如下
{
  flowName:'阶段回复', // 单选展示的内容
  flowValue: '1', // 单选的key
  color: '#083' // 单选按钮的颜色，默认'#1890ff'
}

changeRadio 一个函数方法，改变选中的单选值时，调用，返回内容如下

{
  obj: {
    color: "#083"
    flowName: "阶段回复"
    flowValue: "1"
  },
  value: "1"
}

defaultValue 是当前默认选中的单选按钮，可以不传


使用案例

------------------------------------------------------------
<Radio radioJson={radioJson} changeRadio={this.changeRadio}/>

changeRadio = (obj) => {
  console.log('obj change=============>', obj);
}

const radioJson = [
  {
    flowName:'阶段回复',
    flowValue: '1',
    color: '#083'
  },
  {
    flowName:'完成回复',
    flowValue: '2'
  },
];


