import React from 'react';
import {Text} from 'react-native';
import styles from './indexCss.js';

const GTEestiProText = props => {
  return (
    <Text style={[styles.GTEestiProText, styles.TextStyle, props.style]}>
     {props.children}
    </Text>
  )
}

const AlpEkranTextView = props => {
  return (
    <Text style={[styles.AlpEkranTextView, styles.TextStyle, props.style]}>
      {props.children}
    </Text>
  );
};

const MontserratLightTextView = props => {
  return (
    <Text
      style={[styles.MontserratLightTextView, styles.TextStyle, props.style]}
      {...props}>
      {props.children}
    </Text>
  );
};

const MLightTextView = props => {
  return (
    <Text
      style={[styles.MontserratLightTextView, styles.TextStyle, props.style]}>
      {props.children}
    </Text>
  );
};

const MontserratRegularTextView = props => {
  return (
    <Text
      style={[styles.MontserratRegularTextView, styles.TextStyle, props.style]}
      {...props}>
      {props.children}
    </Text>
  );
};

const MRegularTextView = props => {
  return (
    <Text
      style={[styles.MontserratRegularTextView, styles.TextStyle, props.style]}>
      {props.children}
    </Text>
  );
};

const MontserratSemiBoldTextView = props => {
  return (
    <Text
      style={[
        styles.MontserratSemiBoldTextView,
        styles.TextStyle,
        props.style,
      ]}>
      {props.children}
    </Text>
  );
};

const MSemiBoldTextView = props => {
  return (
    <Text
      style={[
        styles.MontserratSemiBoldTextView,
        styles.TextStyle,
        props.style,
      ]}>
      {props.children}
    </Text>
  );
};

const OpenSansBoldTextView = props => {
  return (
    <Text
      style={[styles.OpenSansBoldTextView, styles.TextStyle, props.style]}
      {...props}>
      {props.children}
    </Text>
  );
};

const OpenSansLightTextView = props => {
  return (
    <Text
      style={[styles.OpenSansLightTextView, styles.TextStyle, props.style]}
      {...props}>
      {props.children}
    </Text>
  );
};

const VolkhovBoldTextView = props => {
  return (
    <Text
      style={[styles.VolkhovBoldTextView, styles.TextStyle, props.style]}
      {...props}>
      {props.children}
    </Text>
  );
};

export {
  AlpEkranTextView,
  MontserratLightTextView,
  MontserratRegularTextView,
  MontserratSemiBoldTextView,
  OpenSansBoldTextView,
  OpenSansLightTextView,
  VolkhovBoldTextView,
  MSemiBoldTextView,
  MLightTextView,
  MRegularTextView,
  GTEestiProText
};
