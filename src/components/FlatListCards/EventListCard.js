import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import {globalstyles} from '../../screens/globalstyles';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../../utilis/theme';

export default function EventListCard({item}) {
  const navigation = useNavigation();

  const [eventId, setEventId] = useState('');
  console.log('Item   ==', item);
  return (
    <View style={[styles.listcontainer]}>
      <TouchableOpacity 
      // onPress={() => navigation.navigate('GuestScreen')}
      >
        <View style={{}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: `${item.color_background}`,
                //   backgroundColor: 'green',
                height: 10,
                width: 10,
                borderRadius: 5,
                marginRight: 10,
              }}
            />

            <Text style={{fontSize: 16, fontWeight: '500', color: COLORS.grey}}>
              {item.name}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <View>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 16,
                }}>
                {item.event_name}
              </Text>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 13,
                  marginTop: 5,
                }}>
                28 Mar, 2023, 13:00
              </Text>
            </View>

            <View
              style={{
                alignItems: 'flex-end',
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 13,
                }}>
                {item.tickets_quantity}
              </Text>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 13,
                }}>
                Tickets
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View
        style={{
          height: 1,
          backgroundColor: 'rgba(255, 255, 255 ,0.3)',
          alignSelf: 'stretch',
          marginVertical: 20,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  listcontainer: {
    // borderBottomColor: "red",
    // borderBottomWidth: 3,
  },
});
