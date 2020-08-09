import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { scale } from '../common/size';

type Props = {
  title: string;
};

const Header: React.SFC<Props> = props => (
  <View style={styles.container}>
    {/* {props.status ? (
      <Arrow
        width={scale(20)}
        height={scale(20)}
        marginTop={scale(16)}
        marginLeft={scale(24)}
      />
    ) : (
      <Cancel
        width={scale(20)}
        height={scale(20)}
        marginTop={scale(16)}
        marginLeft={scale(24)}
      />
    )} */}
    <Text style={styles.TextStyle}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
    container: {
      height: scale(50),
      backgroundColor: '#FFF',
    },
    TextStyle: {
      marginTop: scale(15),
      position: 'absolute',
      alignSelf: 'center',
      fontSize: scale(16),
      fontWeight: 'bold',
      color: '#212121',
    },
  });

export default Header;