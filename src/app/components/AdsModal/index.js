/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
import {Icon} from 'native-base';
import styles from './indexCss';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import {RoundedButton} from '@components';
import {MRegularTextView} from '@components/TextComponents';

const AdsModal = props => {
  const {showDialog, imageUrl, description, onClose, btnClick, btnName} = props;
  return (
    <>
      <View>
        <Modal isVisible={showDialog}>
          <View style={styles.imgContainer}>
            <Image source={{uri: imageUrl}} style={styles.img} />
            <Icon
              name="close"
              onPress={() => {
                onClose(false);
              }}
              style={styles.closeIcon}
            />
            <View style={styles.btnContainer}>
              <RoundedButton type="primary" onPress={btnClick}>
                {btnName}
              </RoundedButton>
            </View>
            <MRegularTextView style={styles.text}>
              {description}
            </MRegularTextView>
          </View>
        </Modal>
      </View>
    </>
  );
};

AdsModal.propTypes = {};

AdsModal.defaultProps = {
  description: 'The perfect gift inspiration for the holidays.',
  btnName: 'Shop Now',
};
export default AdsModal;
