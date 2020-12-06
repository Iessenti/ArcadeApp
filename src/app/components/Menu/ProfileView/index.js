import React from 'react';
import {View, Image,TouchableWithoutFeedback} from 'react-native';
import styles from './indexCss';
import {Color} from '@constants';
import {useNavigation} from '@react-navigation/native';
import {unlogged} from '@images';
import {MRegularTextView, MSemiBoldTextView} from '@components/TextComponents';

const ProfileView = props => {
  const {image, name, phone, onPress} = props;
  return (
    <>
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.name}>
          <MSemiBoldTextView>{name}</MSemiBoldTextView>
        </View>
        <View>
          <MRegularTextView style={{color: Color.textColor.secondary}}>
            {phone}
          </MRegularTextView>
        </View>
      </View>
    </TouchableWithoutFeedback>
    </>
  );
};

ProfileView.propTypes = {};

ProfileView.defaultProps = {
  image: unlogged,
  name: 'unlogged',
  email: 'Почта',
};
export default ProfileView;
