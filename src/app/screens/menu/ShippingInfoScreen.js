import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Color, FontSize } from "@constants";

import { useNavigation } from "@react-navigation/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Icon } from "native-base";
import {
  MRegularTextView,
  MSemiBoldTextView,
  GTEestiProText,
} from "@components/TextComponents";

const ShippingInfoScreen = props => {
	const {} = props;
  	const navigation = useNavigation();

	 const renderHeader = () => {
	    return (
	      <View key="header" style={styles.header}>
	        <View style={styles.headerIconView}>
	          <Icon
	            name="chevron-left"
	            type="Entypo"
	            style={styles.headerIcon}
	            onPress={() => {
	              navigation.goBack();
	            }}
	          />
	        </View>
	      </View>
	    );
	  };

	return (
		<>
		<View>
			{renderHeader()}
			<View>
				<View style={styles.container}>
					<MSemiBoldTextView style={styles.title}>Курьер</MSemiBoldTextView>
					<MRegularTextView style={styles.article}>При доставке курьером на примерку у вас будет 15 минут.</MRegularTextView>

					<MSemiBoldTextView style={styles.title}>Оплата заказа</MSemiBoldTextView>
					<MRegularTextView style={styles.article}>Обязательного процента выкупа нет. Вы оплачиваете только ту одежду или обувь, которая вам подойдет.
					Если вы выбрали один из способов оплаты при получении (наличными или картой), то после примерки вы оплачиваете только те товары, которые оставляете себе. Если вы уже оплатили заказ онлайн, то мы вернем деньги за те товары, от которых вы отказались. Если сумма заказа станет меньше 2000 рублей, вам необходимо заплатить за доставку 100 рублей. 
					При полном отказе от заказа мы вернем вам деньги за заказ и доставку. </MRegularTextView>

					<MSemiBoldTextView style={styles.title}>Доставка по России.</MSemiBoldTextView>
					<MRegularTextView style={styles.article}>Отправка СДЭКом. Вам нужно ввести адрес отделения. Возможна примерка</MRegularTextView>
				</View>
			</View>
		</View>
		</>
	)
}

ShippingInfoScreen.propTypes = {};

ShippingInfoScreen.defaultProps = {};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: hp("5"),
    paddingBottom: hp("2"),
    borderBottomEndRadius: wp("5"),
    borderBottomStartRadius: wp("5"),
  },
  headerIconView: { flexDirection: "row", alignItems: "center", flex: 1 },
  headerIcon: { marginStart: wp("5"), color: Color.textColor.primary },
  container: {flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: wp('10'), marginRight: wp('10'), marginTop: hp('4'),},
  title: {
  	// alignItems: 'center',
  	fontSize: FontSize.Text20,
  	color: Color.textColor.primary,
  	marginBottom: hp('2'),
  },
  article: {
  	// alignItems: 'center',
  	fontSize: FontSize.Text18,
  	color: Color.textColor.secondary,
  	marginBottom: hp('4'),
  },
})

export default ShippingInfoScreen