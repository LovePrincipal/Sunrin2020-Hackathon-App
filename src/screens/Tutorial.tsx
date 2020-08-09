import React, {useState} from 'react';
import { StatusBar, SafeAreaView, ScrollView, View, Text, Dimensions, Image, StyleSheet, PixelRatio } from 'react-native';
import FooterButton from '../components/button';
import TutorialPhone from '../assets/TutorialPhone';
import TutorialSpeak from '../assets/TutorialSpeak';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { scale } from '../common/size';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tutorial: React.FC = ({navigation}) => {
    const [sliderState, setSliderState] = useState({ currentPage: 0 });
    const { width, height } = Dimensions.get('window');
  
    const setSliderPage = (event: any) => {
      const { currentPage } = sliderState;
      const { x } = event.nativeEvent.contentOffset;
      const indexOfNextScreen = Math.floor(x / width);
      if (indexOfNextScreen !== currentPage) {
        setSliderState({
          ...sliderState,
          currentPage: indexOfNextScreen,
        });
      }
    };
  
    const { currentPage: pageIndex } = sliderState;
  
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1, BackgroundColor: '#ffffff' }}>
          <ScrollView
            style={{ flex: 1 }}
            horizontal={true}
            scrollEventThrottle={16}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={(event: any) => {
              setSliderPage(event);
            }}
          >
            <View style={{ width, height }}>
              <View style={styles.ImageWrapper}>
                <TutorialSpeak width={310} height={360} style={styles.imageStyle} />
              </View>
              <View style={styles.wrapper}>
                <Text style={styles.header}>TTS로 정확하게</Text>
                <Text style={styles.paragraph}>{'번역된 텍스트를 TTS로 정확하게\n들을 수 있습니다.'}</Text>
              </View>
            </View>
            <View style={{ width, height }}>
              <View style={styles.ImageWrapper}>
                <TutorialPhone width={310} height={360} style={styles.imageStyle} />
              </View>
              <View style={styles.wrapper}>
                <Text style={styles.header}>간단한 터치로 텍스트를</Text>
          <Text style={styles.paragraph}>{'점자 방식을 채택하여 6자리를 누르면\n점자가 나오고 번역됩니다!'}</Text>
              </View>
            </View>
          </ScrollView>
          <View style={styles.FooterButton}>
            <TouchableOpacity onPress={() => navigation.navigate('Translate')}>
              <FooterButton title={'건너뛰기'} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    imageStyle: {
      height: PixelRatio.getPixelSizeForLayoutSize(135),
      width: '100%',
    },
    wrapper: {
      marginVertical: 30,
    },
    ImageWrapper: {
      alignSelf: 'center',
      marginTop: wp('16%'),
    },
    header: {
      marginLeft: wp('11%'),
      fontSize: scale(24),
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#212121',
      textAlign: 'left',
    },
    paragraph: {
      marginLeft: wp('11%'),
      fontSize: scale(16),
      color: '#AEAEAE',
      textAlign: 'left',
    },
    paginationWrapper: {
      position: 'absolute',
      bottom: 200,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    paginationDots: {
      height: 10,
      width: 10,
      borderRadius: 10 / 2,
      backgroundColor: '#0898A0',
      marginLeft: 10,
    },
    FooterButton: {
      width: '100%',
      height: scale(55),
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
    },
});

export default Tutorial;