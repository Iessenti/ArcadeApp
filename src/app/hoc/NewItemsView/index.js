/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import styles from './indexCss';
import {Color} from '@constants';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {MLightTextView, MRegularTextView} from '@components/TextComponents';
import {SquareButton} from '@components';
import {RoundedButton, RectImageView} from '../../components';

const NewItemsView = props => {
  const {count, image, onPress} = props;
  return (
    <>
      <View key="container" style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View key="counterContainer" style={styles.counterContainer}>
            <View style={{margin: wp('5')}}>
              <SquareButton
                type="tags"
                width={wp('20')}
                height={hp('4')}
                textStyle={{color: Color.darknavy}}>
                {count}
              </SquareButton>
            </View>
            <View key="txtContainer" style={styles.txtContainer}>
              <MRegularTextView style={styles.mainText}>All Items</MRegularTextView>

            </View>
          </View>
          <View key="imgContainer" style={styles.imgContainer}>
            <RectImageView image={image} style={styles.image} />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <RoundedButton
            type="primary"
            width={wp('70')}
            height={hp('5')}
            onPress={onPress}>
            View All
          </RoundedButton>
        </View>
      </View>
    </>
  );
};

NewItemsView.propTypes = {};

NewItemsView.defaultProps = {
  count: 566,
};
export default NewItemsView;
