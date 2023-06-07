import * as React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';
import {StyledText, textStyles} from '../components/StyledText';

export default function Home({navigation}) {
  return (
    <View>
      {/* <Button title="go to vn" onPress={() => navigation.navigate('ViewNote')} /> */}
      <StyledText style={[textStyles, styles.title]}>Notes</StyledText>
      <Text style={styles.title}>Notes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    padding: 50,
  },
});
