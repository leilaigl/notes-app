import React from 'react';
import {Text} from 'react-native';

export const textStyles = {
  fontFamily: 'Nunito-SemiBold',
  fontSize: 25,
  color: '#000000',
};

export const StyledText = ({style, ...props}) => (
  <Text {...props} style={[textStyles, style]} />
);
