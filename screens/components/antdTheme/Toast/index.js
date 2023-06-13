import {ToastAndroid} from 'react-native';

const Toast = props => {
  const {msg} = props;
  return ToastAndroid.showWithGravity(msg, ToastAndroid.LONG, ToastAndroid.TOP);
};

export default Toast;
