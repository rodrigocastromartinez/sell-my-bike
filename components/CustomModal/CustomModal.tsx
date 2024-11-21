import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Modal, View } from "react-native";
import { styles } from "./CustomModal.styles";

export interface CustomModalHandler {
  show: () => void;
  hide: () => void;
}

interface CustomModalProps {
  children: React.ReactNode;
}

const CustomModal = (
  { children }: CustomModalProps,
  ref: React.ForwardedRef<CustomModalHandler>
) => {
  const [modalVisible, setModalVisible] = useState(false);

  const show = () => setModalVisible(true);
  const hide = () => setModalVisible(false);

  useImperativeHandle(ref, () => ({
    show,
    hide,
  }));

  return (
    <Modal animationType='fade' transparent={true} visible={modalVisible}>
      <View style={styles.modalContent}>{children}</View>
    </Modal>
  );
};

export default forwardRef(CustomModal);
