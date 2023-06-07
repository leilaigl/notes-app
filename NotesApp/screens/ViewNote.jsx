import * as React from 'react';
import {Button, View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from '../assets/Styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ViewNote({navigation, route}) {
  const {title, description} = route.params;

  return (
    <View style={styles.container}>
      {/* <Button title="go to home" onPress={() => navigation.navigate('Home')} /> */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.headerBtn}>
            <Icon name="chevron-left" size={40} color="white" />
          </View>
        </TouchableOpacity>
        <View style={{flex: 1}} />
        <TouchableOpacity>
          <View style={styles.headerBtn}>
            <Icon name="edit" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text
          style={[
            styles.text,
            {fontSize: 35, color: 'white', marginBottom: '10%'},
          ]}>
          {title}
        </Text>
        <Text style={[styles.text, {fontSize: 23, color: 'white'}]}>
          {description}
        </Text>
      </ScrollView>
    </View>
  );
}
