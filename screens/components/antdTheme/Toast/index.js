import {ToastAndroid} from 'react-native';

const Toast = props => {
  const {msg} = props;
  return ToastAndroid.showWithGravityAndOffset(
    msg,
    ToastAndroid.LONG,
    ToastAndroid.CENTER,
    25,
    100,
  );
};

export default Toast;
