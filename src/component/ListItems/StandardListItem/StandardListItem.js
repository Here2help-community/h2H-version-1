import React from 'react';
import {
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";
import styles from './StandardListItemStyles';
import AppText from '../../AppText/AppText';

const renderPressableItem = (props) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={props.onPress}  
    >
      <View>
        {props.field}
      </View>
      <View>
        {props.value}
      </View>
    </TouchableOpacity>
  )
}

const renderListItem = (props) => {
  return (
    <View 
      style={styles.container}
      onPress={props.onPress}  
    >
      <View>
        {props.field}
      </View>
      <View>
        {props.value}
      </View>
    </View>
  )
}

const StandardListItem = (props) => {
  return props.onPress ?
    renderPressableItem(props) :
    renderListItem(props)
  
}

export default StandardListItem;