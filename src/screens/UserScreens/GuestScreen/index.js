import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import GuestListCard from '../../../components/FlatListCards/GuestListCard';
import COLORS from '../../../utilis/theme';
import Header from '../../../components/Header';
import {globalstyles} from '../../globalstyles';

export default function GuestScreen({navigation}) {
  const DATA = [
    {
      id: '0',
      event_name: 'Jovan Parker',
      email: 'jovanparker@gmail.com',
      ticket_order_no: '679680',
      tickets_quantity: '236',
    },
    {
      id: '1',
      event_name: 'Robert L. Smith',
      email: 'robertlsmith@gmailcom',
      ticket_order_no: '579680',
      tickets_quantity: '65',
    },
    {
      id: '2',
      event_name: 'David R. Poirier',
      email: 'davidrproirier@gmail.com',
      ticket_order_no: '679680',
      tickets_quantity: '165',
    },
    {
      id: '3',
      event_name: 'Keith J. Pate',
      email: 'keithjpate@gmail,com',
      ticket_order_no: '879680',
      tickets_quantity: '236',
    },
    {
      id: '4',
      event_name: 'Cheryl Ramos',
      email: 'cherylramos@gmail.com',
      ticket_order_no: '379680',
      tickets_quantity: '65',
    },
    {
      id: '5',
      event_name: 'Forte women`s conference',
      email: 'jovanparker@gmail.com',
      ticket_order_no: '979680',
      tickets_quantity: '165',
    },
    {
      id: '6',
      event_name: 'Jovan Parker',
      email: 'robertlsmith@gmailcom',
      ticket_order_no: '779680',

      tickets_quantity: '236',
    },
    {
      id: '7',
      event_name: 'Robert L. Smith',
      email: 'jovanparker@gmail.com',
      ticket_order_no: '479680',
      tickets_quantity: '65',
    },
  ];
  return (
    <View style={[globalstyles.container]}>
      <View style={[globalstyles.maincontainer]}>
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
              Blockchain Cocktail Party
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
              65
            </Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 13,
                }}>
                Total Tickets
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: '#202020',
            alignSelf: 'stretch',
            marginBottom: 30,
            // marginVertical: 20,
          }}
        />
        <FlatList
          // inverted={true}
          data={DATA}
          // data={DATA}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <View style={{}}>
                <GuestListCard item={item} key={item.toString()} />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
