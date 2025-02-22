import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import { useNavigation } from '@react-navigation/core';
import AutoHeightImage from 'react-native-auto-height-image';

const Logo = require('../img/logo.png');
const chwidth = Dimensions.get('window').width;

const menuenrollmentPage = () => {

    const reference = storage().ref('/img/t-shirts/black-t-shirt-sm.png');

    const navigation = useNavigation();

    return (

        <SafeAreaView style={{ height: '100%', width: '100%', backgroundColor: '#F7F7F7' }}>
            <ScrollView>
                <View
                    style={{
                        width: chwidth - 40,
                        marginLeft: 20,
                        marginTop: 40,
                    }}>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ marginTop: 60 }}>
                            <TextInput
                                style={{
                                    width: chwidth - 50,
                                    marginTop: 10,
                                    marginLeft: 10,
                                    marginBottom: 10,
                                    color: 'black',
                                }}
                                placeholder={'메뉴이름입력'}

                            />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View
                                style={{
                                    marginTop: 20,
                                    marginBottom: 10,
                                    borderRadius: 45,
                                    borderWidth: 1,
                                    width: 220,
                                    height: 220,
                                    justifyContent: 'center',
                                    borderColor: '#6485E6',
                                    alignItems: 'center',
                                    color: 'black',
                                }}>
                                <Text onPress={async () => {
                                    // path to existing file on filesystem
                                    const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/m1_food1.png`;
                                    // uploads file
                                    await reference.putFile(pathToFile);
                                }}>사진등록</Text>

                            </View>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <TextInput
                                style={{
                                    width: chwidth - 50,
                                    marginTop: 20,
                                    marginLeft: 10,
                                    color: 'black',
                                }}
                                placeholder={'메뉴간단설명'}

                            />
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={{ marginLeft: 20, marginBottom: 50 }}>
                <View
                    style={{
                        marginTop: 60,
                        borderRadius: 60,
                        borderWidth: 1,
                        width: chwidth - 40,
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#6485E6',
                        borderColor: '#6485E6',
                    }}>
                    <Text style={{ color: 'black' }}>등록하기</Text>
                </View>

                <TouchableWithoutFeedback onPress={() => navigation.navigate("메뉴 삭제 페이지")}>
                    <View style={{ marginTop: 60 }}
                        style={{
                            marginTop: 15,
                            borderRadius: 60,
                            borderWidth: 1,
                            width: chwidth - 40,
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderColor: '#6485E6',
                        }}>
                        <Text style={{ color: 'black' }}>뒤로가기</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </SafeAreaView>
    );
};

export default menuenrollmentPage;