import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput,FlatList } from 'react-native';
import { NavigationContainer } from'@react-navigation/native';
import { createNativeStackNavigator } from'@react-navigation/native-stack';
import React, { useState} from 'react';




export default function History({route, navigation}) {

    const{ param } = route.params;

    return (  
        <View style={styles.history}>
        <Text style={styles.titleText}>
          History:
        </Text>
        <FlatList 
        data={param}
        renderItem={({item})=> (
          <Text style={styles.titleText}> {item} </Text>
        )
      }
        />
      </View>
        );
        };

//Instead of a CSS File use StyleSheet
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'stretch',
      backgroundColor: '#fff'
    },
  
    textFields: {
      flex: 8,
      alignItems: 'center',
      backgroundColor: '#fff',
      justifyContent: 'center',
      paddingTop: 180
    },
  
    buttons: {
      flex: 10,
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingHorizontal: 150,
      paddingTop: 10
    },
  
    titleText: {
      fontSize: 20,
      fontWeight: "bold"
    },
    history: {
      flex: 15,
      alignItems: 'center',
      backgroundColor: '#fff',
      justifyContent: 'center'
    },
  });