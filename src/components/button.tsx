import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {scale} from '../common/size';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type Props = {
  title: string;
};

const FooterButton: React.SFC<Props> = props => (
  <TouchableOpacity activeOpacity={0.8}>
    <View style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#00BFA6',
    width: wp('100%'),
    height: hp('7.8%'),
  },
  text: {
    textAlign: 'center',
    fontSize: scale(14),
    lineHeight: scale(55),
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FooterButton;
