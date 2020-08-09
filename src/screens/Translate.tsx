import React, { useEffect, useState } from 'react';
import {StyleSheet, View, Text, TextInput, SafeAreaView, ScrollView, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {scale} from '../common/size';

import FooterButton from '../components/button';
import Navigation from '../components/header';
import SoundPlayer from 'react-native-sound-player'
import { Fonts } from '../assets/fonts/fonts';



const Translate: React.FC = () => {
    const [Braille, setBraille] = useState('');
    return (
        <SafeAreaView style={styled.Container}>
            <Navigation title={'당신을 위한 번역'}/>
            <ScrollView scrollEnabled={true}>
                <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={70}>
                <TextInput
                    placeholder="번역할 점자를 입력해주세요."
                    style={styled.textInput}
                    onChangeText={Braille => setBraille(Braille)}
                    autoCorrect={false}
                />
                <View style={styled.TextContainer}>
                    <Text style={styled.TextStyle}>{'번역된 결과 📦'}</Text>
                </View>
                <View style={styled.TextContainer}>
                  <Text style={styled.InputTextStyle}>{}</Text>
                </View>
                </KeyboardAvoidingView>
            </ScrollView>
            <View style={styled.FooterButton}>
                <TouchableOpacity onPress={() => SoundPlayer.playUrl('')}>
                    <FooterButton title={'TTS로 번역 듣기 💬'}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styled = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    ImageContainer: {
        alignSelf: 'center',
        marginTop: wp('8%'),
    },
    NumberContainer: {
        marginTop: hp('5%'),
        marginLeft: wp('10%'),
    },
    TextContainer: {
        marginTop: hp('5%'),
        marginLeft: wp('9%'),
    },
    TextStyle: {
        textAlign: 'left',
        fontSize: scale(20),
        color: '#C3C3C3',
    },
    InputTextStyle: {
        textAlign: 'left',
        fontSize: scale(20),
        color: '#212121',
    },
    DescriptionStyle: {
        textAlign: 'left',
        fontSize: scale(15),
        color: '#C8C8C8',
        fontWeight: 'bold',
    },
    FooterButton: {
        width: '100%',
        height: scale(55),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },  
    textInput: {
        width: wp('100%'),
        height: hp('30%'),
        borderWidth: 1,
        fontFamily: "BrailleNormal",
        borderColor: '#F4F4F4',
        color: '#C3C3C3',
        fontSize: scale(24),
        paddingLeft: wp('8%'),
    }
})

export default Translate;