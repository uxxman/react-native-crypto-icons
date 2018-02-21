// @flow

import React, { PureComponent, PropTypes } from 'react';
import { Text, StyleSheet } from 'react-native';
import Icons from './lib/CryptoIconUnicodes';

/**
  * Example usage:
  *
  <CryptoIcon
    name='STRING'
    style={OBJECT}
    allowFontScaling={BOOLEAN}
    onPress={FUNCTION}
  />
  *
**/


type Props = {
  name: string,
  style?: any,
  allowFontScaling?: boolean,
  onPress?: Function
};


export default class CryptoIcon extends PureComponent<Props, void> {  

  render() {
    const { name, style, allowFontScaling, onPress } = this.props;

    if (Icons[name] === undefined)
      return null;

    return (
      <Text 
        allowFontScaling={allowFontScaling} 
        style={[styles.icon, style]}
        onPress={onPress}
      >
        {Icons[name]}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    fontFamily: 'CryptoIcons',
    backgroundColor: 'transparent',
    paddingBottom: 1
  },
});
