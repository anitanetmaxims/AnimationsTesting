import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {
  useNavigation,
  DrawerActions,
  useIsFocused,
} from '@react-navigation/native';
import images from '../constants/images';
// import { DrawerActions } from 'react-navigation';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import COLORS from '../utilis/theme';
import {globalstyles} from '../screens/globalstyles';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DATA = [
  {
    id: '0',
    title: 'Events',
    image: images.eventIcon,
  },
];

function CustomDrawer({route}) {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState(0);

  const clickme = (item, index) => {
    setSelectedId(index);
    console.log('Click ', item.title);
    let title = item.title;
    if (title == 'Events') {
      navigation.navigate('Events');
    } else if (title == 'Manage Event') {
      navigation.navigate('Events');
    }
  };

  const onLogout = async () => {
    // await AsyncStorage.clear();
  };

  //userdata using redux
  // console.log(userData, "redux data");

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#E84334',
      }}>
      <View>
        <ImageBackground
          style={{height: hp('100%')}}
          resizeMode="cover"
          source={images.drawerBG}>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Image
              style={{
                width: wp('50%'),
                height: hp('5%'),
                resizeMode: 'stretch',
                alignSelf: 'center',
              }}
              source={images.mainLogo}
            />
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
              <View
                style={{
                  borderRadius: 25,

                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Entypo name="cross" size={45} color="#FFF" />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 30}}>
            <TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                <Image style={{marginLeft: 25}} />
              </View>
            </TouchableOpacity>

            <View
              style={{
                height: 1,

                backgroundColor: '#ffffff',
              }}
            />

            <View>
              <FlatList
                data={DATA}
                renderItem={({item, index}) => (
                  <View>
                    <TouchableOpacity onPress={() => clickme(item, index)}>
                      <View
                        style={{
                          flexDirection: 'row',
                          padding: 8,
                          marginVertical: 6,
                          alignItems: 'center',
                          //   backgroundColor:
                          //     index === selectedId ? '#E84334' : 'transparent',
                        }}>
                        <Image
                          style={{
                            marginLeft: 15,
                            height: 25,
                            width: 25,
                            resizeMode: 'contain',
                          }}
                          source={item.image}
                        />
                        <Text
                          style={[
                            globalstyles.font16,
                            {
                              marginLeft: 15,
                              color: COLORS.white,
                              fontWeight: '500',
                            },
                          ]}>
                          {item.title}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
          {/* <View
            style={{
              height: 1,
              backgroundColor: '#ffffff',
              marginRight: 25,
              marginLeft: 25,
            }}
          /> */}

          <TouchableOpacity onPress={() => onLogout()}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                alignItems: 'center',
              }}>
              <Image
                style={{
                  marginLeft: 22,
                  tintColor: '#FFFFFF',
                  height: 25,
                  width: 25,
                  resizeMode: 'contain',
                }}
                source={images.logoutIcon}
                // source={require('../../assets/drawericons/logout.png')}
              />
              <Text
                style={[
                  globalstyles.font16,
                  {
                    color: COLORS.white,
                    marginLeft: 15,
                    fontWeight: '500',
                  },
                ]}>
                Log out
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              position: 'absolute',
              bottom: 80,
            }}>
            <View
              style={{
                marginTop: 20,
              }}>
              <Image
                style={{
                  width: wp('50%'),
                  height: hp('5%'),
                  resizeMode: 'stretch',
                  marginLeft: 25,
                }}
                // source={require('../../assets/Images/logo.png')}
              />
            </View>

            <View
              style={{
                marginTop: 0,
              }}>
              <Text
                style={[
                  globalstyles.whitetext,
                  globalstyles.font16,
                  {
                    marginLeft: 25,
                  },
                ]}>
                {/* Version 0.01 */}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

export default CustomDrawer;
