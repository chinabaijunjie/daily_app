import {StyleSheet} from 'react-native';

// 当前这里包含的样式有：分页器的样式，和列表前方图标的外面的壳子iconBox，中等列表图标iconsMd，较小列表图标icons
export const commonStyle = StyleSheet.create({
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
});
