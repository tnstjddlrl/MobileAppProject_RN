import React, { useState } from 'react';
import database from '@react-native-firebase/database';

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

import { useNavigation } from '@react-navigation/core';
import AutoHeightImage from 'react-native-auto-height-image';
import { NUMBER_BINARY_OPERATORS } from '@babel/types';

const Logo = require('../img/logo.png');
const chwidth = Dimensions.get('window').width;

const RegisterPage = () => {
  const [id, setID] = useState('');
  const [pwd, setPWD] = useState('');
  const [pwd_check, setPWD_CHECK] = useState('');
  const [num, setNUM] = useState('');

  const navigation = useNavigation();

  const databasefunction = () => {

    database()
      .ref('/users/guest/' + id)
      .set({
        id: id,
        pwd: pwd,
        pwd_check: pwd_check,
        num: num,

      })
      .then(() => {
        console.log('----------------데이터 삽입성공-------------------')
        console.log(id);

      });

  };



  return (

    <SafeAreaView style={{ height: '100%', width: '100%', backgroundColor: '#F7F7F7' }}>
      <ScrollView>
        <View
          style={{
            width: chwidth - 40,
            marginLeft: 20,
            marginTop: 45,
          }}>
          <View style={{ alignItems: 'center' }}>
            <View>
              <AutoHeightImage
                width={150}
                source={Logo}
              />
            </View>
            <View style={{ marginTop: 35 }}>
              <View
                style={{
                  marginTop: 40,
                  borderRadius: 60,
                  borderWidth: 1,
                  width: chwidth - 40,
                  height: 50,
                  borderColor: '#6485E6',
                  justifyContent: 'center',
                }}>
                <TextInput onChangeText={(id) => { setID(id) }}
                  style={{ width: chwidth - 50, marginLeft: 10 }}
                  placeholder={'ID'}
                />
              </View>
              <View style={{ marginTop: 60 }}
                style={{
                  marginTop: 15,
                  borderRadius: 60,
                  borderWidth: 1,
                  width: chwidth - 40,
                  height: 50,
                  borderColor: '#6485E6',
                  justifyContent: 'center',
                }}>
                <TextInput onChangeText={(pwd) => { setPWD(pwd) }}
                  style={{ width: chwidth - 50, marginLeft: 10 }}
                  placeholder={'PWD'}
                />
              </View>
              <View style={{ marginTop: 60 }}
                style={{
                  marginTop: 15,
                  borderRadius: 60,
                  borderWidth: 1,
                  width: chwidth - 40,
                  height: 50,
                  justifyContent: 'center',
                  borderColor: '#6485E6',
                }}>
                <TextInput onChangeText={(pwd_check) => { setPWD_CHECK(pwd_check) }}
                  style={{ width: chwidth - 50, marginLeft: 10 }}
                  placeholder={'PWD_CHECK'}
                />
              </View>
              <View style={{ marginTop: 60 }}
                style={{
                  marginTop: 15,
                  borderRadius: 60,
                  borderWidth: 1,
                  width: chwidth - 40,
                  height: 50,
                  justifyContent: 'center',
                  borderColor: '#6485E6',
                }}>
                <TextInput onChangeText={(num) => { setNUM(num) }}
                  style={{ width: chwidth - 50, marginLeft: 10 }}
                  placeholder={'NUM'}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={{ marginLeft: 20, marginBottom: 50 }}>
        <TouchableWithoutFeedback onPress={() => { databasefunction() }}>
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
            <Text style={{ color: 'white' }}>회원가입하기</Text>
          </View>
        </TouchableWithoutFeedback>

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
      </View>
    </SafeAreaView>
  );
};


export default RegisterPage;