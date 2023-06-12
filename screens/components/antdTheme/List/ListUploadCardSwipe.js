// import React from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableNativeFeedback,
//   Dimensions,
//   UIManager,
//   findNodeHandle,
//   ActivityIndicator,
//   StyleSheet,
// } from 'react-native';
// import {getCacheData} from '../../../../util/appCache';
// import {AppCacheKeys} from '../../../../util/sysconfig';

// import {SwipeListView} from 'react-native-swipe-list-view';

// import moment from 'moment';
// import NotData from '../../NotData';
// import styles from './styles';

// const rightBtn = [
//   {
//     backgroundColor: '#1890ff',
//     text: '编辑',
//     color: 'white',
//   },
// ];

// const FlatListUpLoadCardSwipe = props => {
//   console.log('props', props);
//   const [Btnheight, BtnSetstate] = React.useState(''); //按钮自适应高度，因为按钮不受滑动的盒子的影响
//   const {
//     data,
//     refresh,
//     onRefresh,
//     showFoot,
//     upLoadData,
//     handleItemTo,
//     handleLongPress,
//     cardJson,
//     handleUserKey,
//     rightOpenValue,
//     leftOpenValue,
//     disableLeft,
//     disableRight,
//     leftBtnList,
//     rightBtnList,
//   } = props;

//   const setBtnHeightfnc = values => {
//     BtnSetstate(values);
//   };

//   return (
//     <SwipeListView
//       useFlatList
//       data={data}
//       refreshing={refresh ? refresh : false}
//       rightOpenValue={rightOpenValue ? rightOpenValue : 120}
//       leftOpenValue={leftOpenValue ? leftOpenValue : 120}
//       disableRightSwipe={disableRight === false ? disableRight : true}
//       disableLeftSwipe={disableLeft === false ? disableLeft : true}
//       closeOnRowBeginSwipe={true}
//       onRefresh={() => {
//         onRefresh ? onRefresh() : '';
//       }}
//       ListEmptyComponent={<NotData iconCode={'\ue6b6'} describeTest={''} />}
//       onEndReachedThreshold={0.1}
//       onEndReached={() => {
//         upLoadData ? upLoadData() : '';
//       }}
//       ListFooterComponent={_renderFooter(showFoot)}
//       renderItem={({item}) => {
//         return (
//           <TouchableNativeFeedback
//             key={item.id}
//             onPress={() => {
//               handleItemTo ? handleItemTo(item) : '';
//             }}
//             onLongPress={() => {
//               handleLongPress ? handleLongPress(item) : '';
//             }}>
//             <View>
//               <Items
//                 data={item}
//                 cardJson={cardJson}
//                 handleUserKey={handleUserKey}
//                 setBtn={setBtnHeightfnc}
//               />
//             </View>
//           </TouchableNativeFeedback>
//         );
//       }}
//       renderHiddenItem={(data, rowMap) => (
//         <View style={styles.renderSwipe}>
//           <View style={styles.renderSwipeLeft}>
//             {leftBtnList
//               ? leftBtnList?.map((item, index) => {
//                   return (
//                     <TouchableNativeFeedback
//                       onPress={item.onPress ? item.onPress : null}
//                       key={index}>
//                       <View
//                         key={index}
//                         style={{
//                           width: item.width ? item.width : 75,
//                           height: Btnheight ? Btnheight : null,
//                           backgroundColor: item.bgColor
//                             ? item.bgColor
//                             : '#1890ff',
//                         }}>
//                         <Text
//                           style={{
//                             textAlign: item.textAlign
//                               ? item.textAlign
//                               : 'center',
//                             fontSize: item.fontSize ? item.fontSize : null,
//                             lineHeight: Btnheight ? Btnheight : null,
//                             color: item.fontColor ? item.fontColor : '#ffffff',
//                           }}>
//                           {item.text}
//                         </Text>
//                       </View>
//                     </TouchableNativeFeedback>
//                   );
//                 })
//               : null}
//           </View>
//           <View style={styles.renderSwipeRight}>
//             {rightBtnList
//               ? rightBtnList?.map((item, index) => {
//                   return (
//                     <TouchableNativeFeedback
//                       onPress={item.onPress ? item.onPress : null}
//                       key={index}>
//                       <View
//                         key={index}
//                         style={{
//                           width: item.width ? item.width : 75,
//                           height: Btnheight ? Btnheight : null,
//                           backgroundColor: item.bgColor
//                             ? item.bgColor
//                             : '#1890ff',
//                         }}>
//                         <Text
//                           style={{
//                             textAlign: item.textAlign
//                               ? item.textAlign
//                               : 'center',
//                             fontSize: item.fontSize ? item.fontSize : null,
//                             lineHeight: Btnheight ? Btnheight : null,
//                             color: item.fontColor ? item.fontColor : '#ffffff',
//                           }}>
//                           {item.text}
//                         </Text>
//                       </View>
//                     </TouchableNativeFeedback>
//                   );
//                 })
//               : null}
//           </View>
//         </View>
//       )}
//     />
//   );
// };

// export default FlatListUpLoadCardSwipe;

// // 列表 每一个列的样式
// const Items = props => {
//   const {data, cardJson, handleUserKey, setBtn} = props;
//   const userId = getCacheData(AppCacheKeys['userID']);
//   return (
//     <View
//       style={styles.swipeCard}
//       onLayout={event => {
//         setBtn(event.nativeEvent.layout.height);
//       }}>
//       <View style={styles.swipeChildBox}>
//         {cardJson &&
//           cardJson.length > 0 &&
//           cardJson.map(item => {
//             let valFirst = undefined;
//             let valSecond = undefined;
//             let attribute = {};
//             if (item.value && item.value.indexOf('.') > -1) {
//               let values = item.value.split('.');
//               valFirst = values[0];
//               valSecond = values[1];
//               attribute = data[valFirst];
//             }
//             return (
//               <View key={item.title} style={styles.cardLine}>
//                 <View style={styles.cardTitle}>
//                   <Text style={[styles.cardTitle, {paddingRight: 10}]}>
//                     {item.title}:
//                   </Text>
//                 </View>
//                 <View style={styles.cardContent}>
//                   {/* <Text numberOfLines={2} style={styles.cardContent}>{data[item.value ] ? data[item.value ] : ''}</Text> */}
//                   {item.value && item.value.indexOf('.') > -1 ? (
//                     <Text numberOfLines={2} style={styles.cardContent}>
//                       {attribute[valSecond] ? attribute[valSecond] : ''}
//                     </Text>
//                   ) : (
//                     <Text numberOfLines={2} style={styles.cardContent}>
//                       {data[item.value] ? data[item.value] : ''}
//                     </Text>
//                   )}
//                 </View>
//               </View>
//             );
//           })}
//       </View>
//       <View
//         style={
//           handleUserKey && userId === data[handleUserKey] ? styles.handle : ''
//         }
//       />
//     </View>
//   );
// };

// // 列表尾部展示，无数据或者正在加载，或者是空
// function _renderFooter(showFoot = 0) {
//   if (showFoot === 1) {
//     return (
//       <View
//         style={{
//           height: 30,
//           alignItems: 'center',
//           justifyContent: 'flex-start',
//         }}>
//         <Text
//           style={{
//             color: '#999999',
//             fontSize: 14,
//             marginTop: 5,
//             marginBottom: 5,
//           }}>
//           没有更多数据了
//         </Text>
//       </View>
//     );
//   } else if (showFoot === 2) {
//     return (
//       <View style={styles.footer}>
//         <ActivityIndicator />
//         <Text>正在加载更多数据...</Text>
//       </View>
//     );
//   } else if (showFoot === 0) {
//     return (
//       <View style={styles.footer}>
//         <Text />
//       </View>
//     );
//   }
// }

// function changeTime(timeStr) {
//   let showTime = '';
//   if (timeStr) {
//     const nowDay = moment().format('YYYY-MM-DD');
//     const parameterDay = timeStr.substr(0, 10);
//     const parameterTime = timeStr.substr(11);
//     if (nowDay === parameterDay) {
//       showTime = parameterTime;
//     } else {
//       showTime = parameterDay;
//     }
//   }
//   return showTime;
// }
