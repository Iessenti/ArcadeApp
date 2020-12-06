import React, { useState, useEffect }  from 'react';
import {
  AppRegistry,
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
  Picker,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  SafeAreaView
} from 'react-native';

import {
  Currency,
  Order,
  Receipt,
  Failure,
  Cloudipsp,
  CardInput,
  CardLayout,
  CardFieldNumber,
  CardFieldExpMm,
  CardFieldExpYy,
  CardFieldCvv,
  CloudipspWebView
} from 'react-native-cloudipsp';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Color, FontSize } from "@constants";
import {RoundedButton} from '@components';
import {GTEestiProText, MRegularTextView} from '@components/TextComponents';
import {Icon} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text'
import order from '../../order'

const IncorrectData = props => {
  return (
    <View style={styles.errorContainer}>
      <GTEestiProText style={styles.error}>Неверная платёжная информация</GTEestiProText>
    </View>
  )
}
const CardError = props => {
  return (
    <View style={styles.errorContainer}>
      <GTEestiProText style={styles.error}>Пожалуйста, введите корректный номер карты</GTEestiProText>
    </View>
  )
}
const MonthError = props => {
  return (
    <View style={styles.errorContainer}>
      <GTEestiProText style={styles.error}>Пожалуйста, введите корректный месяц</GTEestiProText>
    </View>
  )
}
const YearError = props => {
  return (
    <View style={styles.errorContainer}>
      <GTEestiProText style={styles.error}>Пожалуйста, введите корректный год</GTEestiProText>
    </View>
  )
}
const DateError = props => {
  return (
    <View style={styles.errorContainer}>
      <GTEestiProText style={styles.error}>Пожалуйста, введите корректную дату</GTEestiProText>
    </View>
  )
}
const CvvError = props => {
  return (
    <View style={styles.errorContainer}>
      <GTEestiProText style={styles.error}>Пожалуйста, введите корректные код CVV</GTEestiProText>
    </View>
  )
}

class AddCardScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      merchant: '1452601',
      amount: (100 * props.route.params.price),
      total: props.route.params.price,
      ccy: 'RUB',
      email: '',
      description: 'arcade',
      error: false,
      success: false,
    };
  }

  componentDidMount() {
    Cloudipsp.supportsApplePay()
      .then((result) => {
        console.log('SupportsApplePay: ', result);
      });
    Cloudipsp.supportsGooglePay()
      .then((result) => {
        console.log('SupportsGooglePay: ', result);
      });
  }

  getOrder = () => {
    return new Order(
      Number(this.state.amount),
      this.state.ccy,
      'rn_' + Math.random(),
      this.state.description,
      this.state.email
    );
  };

  pay = () => {
    const order = this.getOrder();
    const card = this.cardForm.getCard();
    if (!card.isValidCardNumber()) {
      this.setState({error: false})
      this.setState({error: <CardError />})
    } else if (!card.isValidExpireMonth()) {
      this.setState({error: false})
      this.setState({error: <MonthError />})

    }  else    if (!card.isValidExpireYear()) {
      this.setState({error: false})
      this.setState({error: <YearError />})

    } else if (!card.isValidExpireDate()) {
      this.setState({error: false})
      this.setState({error: <DateError />})
    } else if (!card.isValidCvv()) {
      this.setState({error: false})
      this.setState({error: <CvvError />})
    } else {
      const cloudipsp = this.cloudipsp();
      cloudipsp.pay(card, order)
        .then((receipt) => {
          this.setState({ webView: undefined });
          this.setState({error: false})
          order(this.props.route.params.order, 'Опл'); 
          this.props.navigation.navigate("OrderSuccessScreen")
        })
        .catch((error) => {
          console.log(error)
          this.setState({error: <IncorrectData />});
          
        });

    }
  };

  cloudipsp = () => {
    return new Cloudipsp(Number(this.state.merchant), (payConfirmator) => {
      this.setState({ webView: 1 });
      return payConfirmator(this.cloudipspWebView);
    });
  };

  applePay = () => {
    const cloudipsp = this.cloudipsp();
    const order = this.getOrder();
    cloudipsp.applePay(order)
      .then((receipt) => {
        this.setState({ webView: undefined });
        this.setState({success: true})
          order(this.props.route.params.order, 'Опл'); 
          this.props.navigation.navigate("OrderSuccessScreen")
      })
      .catch((error) => {
                  this.setState({error: <IncorrectData />});
      });
  };

  googlePay = () => {
    const cloudipsp = this.cloudipsp();
    const order = this.getOrder();
    cloudipsp.googlePay(order)
      .then((receipt) => {
        this.setState({ webView: undefined });
        Alert.alert('Транзакция успешна');
          order(this.props.route.params.order, 'Опл'); 
          this.props.navigation.navigate("OrderSuccessScreen")
      })
      .catch((error) => {
            this.setState({error: <IncorrectData />});
      });
  };

  renderHeader = () => {
    return (
      <View key="header" style={styles.header}>
        <View style={styles.headerIconView}>
          <Icon
            name="chevron-left"
            type="Entypo"
            style={styles.headerIcon}
            onPress={() => {this.props.navigation.goBack()}}
          />
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        {this.renderScreen()
      }
    </View>
    )
  }


  renderScreen() {
      return (<ScrollView
        style={styles.flex1}
        keyboardDismissMode={'none'}
        keyboardShouldPersistTaps={'handled'}
      >
          {this.renderHeader()}
          <View style={styles.titleView}><GTEestiProText style={styles.title}>К оплате: {this.state.total} рублей</GTEestiProText></View>
          {this.renderCardForm()}
          {this.state.error}
          <View style={{ borderRadius: wp('5'), marginStart: wp('5'), marginTop: hp('3'),
              marginEnd: wp('5'), flexDirection: 'column', alignItems: 'center'}}>

              <RoundedButton onPress={this.pay}  type="primary" style={{width: wp('60')}}>Оплатить</RoundedButton>
            <View style={{ flex: 1, marginTop: 15 }}>
              {
                Platform.OS === 'android'
                  ? <RoundedButton onPress={() => {this.googlePay(); if (this.state.success == true) { order(this.props.route.params.order, 'Опл'); this.props.navigation.navigate("OrderSuccessScreen");}}} type="primary">Google Pay</RoundedButton>
                  : <RoundedButton onPress={() => {this.applePay(); if (this.state.success == true) { order(this.props.route.params.order, 'Опл'); this.props.navigation.navigate("OrderSuccessScreen");}}}  type="primary">Apple Pay</RoundedButton>
              }
            </View>
          </View>
      </ScrollView>);
    }



  renderCardForm() {
      return (
        <CardLayout
          ref={(ref) => {
            this.cardForm = ref;
          }}
          inputNumber={() => this.refs.inputNumber}
          inputExpMm={() => this.refs.inputMm}
          inputExpYy={() => this.refs.inputYy}
          inputCvv={() => this.refs.inputCvv}
          style={{flex: 1}}
        >
        <View style={styles.form}>
          <View style={styles.labelContainer}>
            <MRegularTextView style={styles.label}>Номер карты:</MRegularTextView>
          </View>

          <CardFieldNumber 
            ref="inputNumber"
            placeholder="Введите номер карты с пробелами"
            style={styles.input}
            onSubmitEditing={() => {
              this.refs.inputMm.focus();
            }}
          />
          <View style={styles.labelContainer}>
                <MRegularTextView style={styles.label}>CVV:</MRegularTextView>
          </View>
          <CardFieldCvv
            ref="inputCvv"
            style={styles.shortInput}
            placeholder='CVV'
            onSubmitEditing={() => {
              this.refs.inputMm.focus();
            }}
          />
          <View style={styles.labelContainer}>
            <MRegularTextView style={styles.label}>Дата истечения срока:</MRegularTextView>
          </View>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <CardFieldExpMm
              ref="inputMm"
              style={styles.shortInput}
              placeholder='MM'
              onSubmitEditing={() => {
                this.refs.inputYy.focus();
              }}
            />
            <CardFieldExpYy
              ref="inputYy"
              style={styles.shortInput}
              placeholder='YY'
              onSubmitEditing={() => {
                if (this.props.onCompletion) {
                  this.props.onCompletion(this);
                }
              }}
            />
          </View>
        </View>
        </CardLayout>);
    }
  
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1, 
    flexDirection: 'column'
  },
  buttonText: {
    textAlign: 'center',
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#999999'
  },
  simpleTextInput: {
    height: 33,
    borderWidth: 0.5,
    borderColor: '#9900ff',
    flex: 1,
    fontSize: 17,
    padding: 6,
  },
  simpleText: {
    color: '#ff9900',
    fontSize: 16,
    padding: 4,
    marginTop: 5,
    marginBottom: 5
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: wp('80'),
    height: hp('6'),
    backgroundColor: Color.light.blue,
    color: Color.textColor.primary,
    fontSize: FontSize.Text14,
    borderColor: Color.inputTextBorder,
    borderRadius: wp('10'),
    alignSelf: 'center',
    borderWidth: 1,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  shortInput: {
    width: wp('40'),
    height: hp('6'),
    marginEnd: wp('5'),
    backgroundColor: Color.light.blue,
    color: Color.textColor.primary,
    fontSize: FontSize.Text14,
    borderColor: Color.inputTextBorder,
    borderRadius: wp('10'),
    alignSelf: 'center',
    borderWidth: 1,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

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
  headerCartIconView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
    marginEnd: wp("5"),
  },
    titleView: {marginStart: wp('5'), marginTop: hp('3')},
  form: {
    borderRadius: wp('5'),
    marginStart: wp('5'),
    marginTop: hp('4'),
    marginEnd: wp('5'),
  },
  labelContainer: {
    marginStart: wp('2'),
    marginBottom: hp('1'),
    marginTop: hp('1'),
  },
  label: {
    fontSize: FontSize.Text18,
    color: Color.textColor.secondary,
    fontFamily: 'Montserrat-Regular',
  },
  btnContainer: {alignItems: 'center', marginTop: hp('7')},
    errorContainer: {alignItems: 'center'},
  error: { marginTop: hp('3'), color: '#ff2d88', fontSize: FontSize.Text16,},
    form: {
    borderRadius: wp('5'),
    marginStart: wp('5'),
    marginTop: hp('6'),
    marginEnd: wp('5'),
  },
    title: {
    fontSize: FontSize.Text20
  },
  titleView: {marginTop: hp('6'), alignItems: 'center'},
});

AppRegistry.registerComponent('cloudipsp', () => AddCardScreen);
export default AddCardScreen
