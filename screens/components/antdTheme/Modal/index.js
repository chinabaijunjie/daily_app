import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';

const ModalComponent = props => {
  const {
    visible,
    closeModel,
    offectSize,
    children,
    positionStyle,
    contentStyle,
    handleModal = true,
  } = props;
  return (
    <View>
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          closeModel ? closeModel() : '';
        }}>
        <TouchableWithoutFeedback
          onPress={() => {
            closeModel && handleModal ? closeModel() : '';
          }}>
          <View
            style={[
              styles.modelBox,
              {padding: offectSize ? offectSize : 40},
              positionStyle ? positionStyle : {},
            ]}>
            <View style={[styles.container, contentStyle ? contentStyle : {}]}>
              {children}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  modelBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 7,
  },
});
