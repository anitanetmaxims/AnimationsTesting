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

export default function TicketListCard({item}) {
  const navigation = useNavigation();

  const [eventId, setEventId] = useState('');
  console.log('Item   ==', item);
  return (
    
    <View style={[styles.listcontainer]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('GuestDetailsScreen')}>
        <View style={{}}>
          <View
            style={{
              //   flexDirection: 'row',
              //   justifyContent: 'space-between',
              //   alignItems: 'center',
              marginTop: 10,
            }}>
            <View>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 16,
                }}>
                {item.ticket_name}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // alignItems: 'center',
                marginTop: 15,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: COLORS.grey,
                    //   fontSize: 13,
                  }}>
                  Tickets:
                </Text>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 13,
                  }}>
                  {' '}
                  {item.tickets_quantity}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: COLORS.grey,
                    //   fontSize: 13,
                  }}>
                  Ticket No:
                </Text>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 13,
                  }}>
                  {' '}
                  {item.ticket_order_no}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: COLORS.grey,
                    //   fontSize: 13,
                  }}>
                  Price:
                </Text>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 13,
                  }}>
                  {' '}
                  €{item.price}
                </Text>
              </View>
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
