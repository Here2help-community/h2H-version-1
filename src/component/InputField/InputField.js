import React, { useState } from 'react';
import {
  View,
  TextInput,
} from "react-native";
import styles from './styles';
import AppText from '../AppText/AppText';

const InputField = (props) => {

  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      <AppText style={[ styles.label, 
                        props.error && styles.error || 
                        props.success && styles.success ]}>
        { props.label }
      </AppText>
      <TextInput
        style={[ styles.input, 
                 isFocused && styles.input_onFocus,
                 props.error && styles.inputError ||
                 props.success && styles.successBG ]}
        secureTextEntry={ props.secureTextEntry }
        placeholder={ props.placeholder }
        placeholderTextColor={ props.placeholderTextColor || '#C7C7CD' }
        onChangeText={ text => { 
          setText(text);
          props.onChangeText(text);
        } }
        value={props.value ? props.value : text}
        onFocus={ (e) => { setIsFocused(true) } }
        onBlur={ (e) => { setIsFocused(false) } }
        spellCheck={ props.spellCheck || false }
        keyboardType={ props.keyboardType || 'default' }
        autoCapitalize={ props.autoCapitalize || 'sentences' }
      />
      <AppText style={[ styles.additionalInfo, 
                        props.error && styles.error || 
                        props.success && styles.success || 
                        props.info && styles.info ]}>
        { props.error || props.success || props.info }
      </AppText>
    </View>
  )
}

export default InputField;