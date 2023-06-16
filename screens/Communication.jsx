import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,FlatList} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

const CommunicationItem = ({ tabIcon,item, onPress }) => {
  const {commsubject, sentby, senddate } = item;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Text style={styles.tabIcon}>{tabIcon}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{commsubject}</Text>
        <Text style={styles.sentBy}>Sent By: {sentby}</Text>
        <Text style={styles.sentDate}>Sent Date: {moment(senddate).format('MM/DD/YYYY hh:mm:ss A')}</Text>
      </View>
      <Icon name="angle-right" size={24} color="#233698" />
    </TouchableOpacity>
  );
};

const Communication = ({ filterComm,tabIcon,navigation}) => {
  const renderItem = ({ item }) => {
    return <CommunicationItem tabIcon={tabIcon} item={item} onPress={() => navigateToDetail(item.commtosend_id)} />;
  };

  const navigateToDetail = (commtosend_id) => {
    navigation.navigate('CommunicationDetail',{id:commtosend_id})
    console.log(commtosend_id);
  };

  return (
    <FlatList
      data={filterComm}
      renderItem={renderItem}
      keyExtractor={(item) => item.commtosend_id.toString()}
    />
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    iconContainer: {
      backgroundColor: '#233698',
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
    },
    tabIcon: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 20,
    },
    contentContainer: {
      flex: 1,
    },
    title: {
      color: '#233698',
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 8,
    },
    sentBy: {
      color: '#000000',
      fontSize: 16,
      marginBottom: 4,
    },
    sentDate: {
      color: '#222222',
      fontSize: 16,
    },
  });
  

export default Communication;
