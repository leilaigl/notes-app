import * as React from 'react';
import {Button} from 'react-native';

export default function ViewNote({navigation}) {
  return (
    <Button title="go to home" onPress={() => navigation.navigate('Home')} />
  );
}
