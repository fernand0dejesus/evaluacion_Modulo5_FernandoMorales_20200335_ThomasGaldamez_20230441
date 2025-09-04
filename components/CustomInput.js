import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ style, disabled = false, ...props }) => {
  return (
    <TextInput
      style={[
        styles.input,
        disabled && styles.disabledInput,
        style
      ]}
      editable={!disabled}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  disabledInput: {
    backgroundColor: '#f0f0f0',
    color: '#888',
  },
});

export default CustomInput;