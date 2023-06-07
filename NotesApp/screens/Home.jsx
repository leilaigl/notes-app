import * as React from 'react';
import {Button} from 'react-native';

export default function Home({navigation}) {
  return (
    <Button title="go to vn" onPress={() => navigation.navigate('ViewNote')} />
  );
}
