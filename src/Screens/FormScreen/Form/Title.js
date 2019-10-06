import React, { useContext } from 'react';
import { View, TextInput } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';

const Title = ({ title, setTitle }) => {
  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).container}>
      <TextInput
        style={styles(theme).title}
        placeholder="Title"
        placeholderTextColor={theme.placeholderText}
        selectionColor={theme.primary}
        value={title}
        onChangeText={input => setTitle(input)}
      />
    </View>
  );
};

const styles = theme => {
  return {
    title: {
      fontSize: 55,
      fontWeight: '600',
    },
  };
};

export default Title;
