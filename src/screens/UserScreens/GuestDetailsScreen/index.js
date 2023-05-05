import {View, Text, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {globalstyles} from '../../globalstyles';
import {styles} from './style';
import COLORS from '../../../utilis/theme';

import TicketListCard from '../../../components/FlatListCards/TicketListCard';

export default function GuestDetailsScreen() {
  const DATA = [
    {
      id: '0',
      ticket_name: 'Blockchain Cocktail Party',
      ticket_order_no: '679680',
      tickets_quantity: '6',
      price: '134',
    },
    {
      id: '1',
      ticket_name: 'General',
      ticket_order_no: '579680',
      tickets_quantity: '5',
      price: '134',
    },
    {
      id: '2',
      ticket_name: 'Gold',
      ticket_order_no: '679680',
      tickets_quantity: '1',
      price: '134',
    },
    {
      id: '3',
      ticket_name: 'Diamond',
      ticket_order_no: '879680',
      tickets_quantity: '2',
      price: '104',
    },
    {
      id: '4',
      ticket_name: 'Silver',
      ticket_order_no: '379680',
      tickets_quantity: '6',
      price: '176',
    },
    {
      id: '5',
      ticket_name: 'General',
      ticket_order_no: '979680',
      tickets_quantity: '1',
      price: '133',
    },
    {
      id: '6',
      ticket_name: 'Gold',
      ticket_order_no: '779680',
      tickets_quantity: '3',
      price: '174',
    },
    {
      id: '7',
      ticket_name: 'Diamond',
      ticket_order_no: '479680',
      tickets_quantity: '5',
      price: '34',
    },
  ];

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}>
      <View style={[globalstyles.container]}>
        <View style={[globalstyles.maincontainer, {marginTop: 20}]}>
          <View>
            <Text style={styles.headlinetext}>Event name</Text>
            <Text style={styles.subtextstyle}>Blockchain Cocktail Party</Text>
          </View>
          <View style={styles.horizontalLine} />
          <View>
            <Text style={styles.headlinetext}>Name</Text>
            <Text style={styles.subtextstyle}>Jovan Parker</Text>
          </View>
          <View style={styles.horizontalLine} />
          <View>
            <Text style={styles.headlinetext}>Email-ID</Text>
            <Text style={styles.subtextstyle}>jovanparker@gmail.com</Text>
          </View>
          <View style={styles.horizontalLine} />
          <View>
            <Text style={styles.headlinetext}>Phone Number</Text>
            <Text style={styles.subtextstyle}>+01 9056 050 16</Text>
          </View>
          <View style={styles.horizontalLine} />
          <View>
            <Text style={styles.headlinetext}>Ticket purchase date</Text>
            <Text style={styles.subtextstyle}>28 Mar, 2023, 13:00</Text>
          </View>
          <View style={styles.horizontalLine} />

          <View>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 20,
              }}>
              Ticket details
            </Text>
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
                  <TicketListCard item={item} key={item.toString()} />
                </View>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}
