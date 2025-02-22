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
  Dimensions,
  Alert,

} from 'react-native';

import { useNavigation } from '@react-navigation/core';
import AutoHeightImage from 'react-native-auto-height-image';
import { useRecoilState } from 'recoil';
import { atomManagernum, atomUserId, atomUserPhone } from '../atom/atom';

const Logo = require('../img/logo.png');
const chwidth = Dimensions.get('window').width;

const LoginPage = () => {
  const navigation = useNavigation()

  const [id, setID] = useState('');
  const [pwd, setPWD] = useState('');

  const [atId, setAtId] = useRecoilState(atomUserId)
  const [atPhone, setAtPhone] = useRecoilState(atomUserPhone)
  const [atManagernum, setAtManagernum] = useRecoilState(atomManagernum)


  const databasefunction = () => {
    database()
      .ref('/users/' + id)
      .once('value')
      .then((snapshot) => {
        console.log('-------------------로그인정보---------------------');
        console.log(snapshot.val());
        if (pwd != snapshot.val().pwd) {
          console.log('다름');
          // Alert.alert('아이디 패스워드 오류')
          Alert.alert(
            "아이디 또는 패스워드를 확인해주세요",
            "",
            [
              { text: "확인", onPress: () => console.log("OK Pressed") }
            ]
          );
        } else if (pwd == snapshot.val().pwd) {
          console.log(snapshot.val().M_num + '로그인함');
          if (snapshot.val().M_num.split('')[0] === 'g') {
            setAtId(id);
            setAtPhone(snapshot.val().phone);
            navigation.navigate('메인페이지');
          } else if (snapshot.val().M_num.split('')[0] === 'M') {
            setAtId(id);
            setAtManagernum(snapshot.val().M_num);
            setAtPhone(snapshot.val().phone);
            navigation.navigate('매장사장 메인페이지');

          }
        }
      });


  };



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
            <View>
              <AutoHeightImage
                width={150}
                source={Logo}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <View
                style={{
                  marginTop: 0,
                  borderRadius: 60,
                  borderWidth: 1,
                  width: chwidth - 40,
                  height: 50,
                  justifyContent: 'center',
                  borderColor: '#6485E6',
                }}>
                <TextInput
                  style={{ width: chwidth - 50, marginLeft: 10 }}
                  placeholder={'ID'}
                  onChangeText={setID}
                  value={id}
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
                <TextInput
                  style={{ width: chwidth - 50, marginLeft: 10 }}
                  placeholder={'PWD'}
                  onChangeText={setPWD}
                  value={pwd}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={{ marginLeft: 20 }}>
        <TouchableWithoutFeedback onPress={() => { databasefunction() }}>
          <View
            style={{
              borderRadius: 60,
              borderWidth: 1,
              width: chwidth - 40,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#6485E6',
              borderColor: '#6485E6',
            }}>
            <Text style={{ color: 'white' }}>로그인하기</Text>
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
        <TouchableWithoutFeedback onPress={() => {
          navigation.navigate('회원가입 페이지')
        }}>
          <View style={{
            width: chwidth - 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text style={{
              color: '#6485E6',
              fontWeight: '900',
            }}>아직 회원이 아니신가요?</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView >
  );
};

export default LoginPage;