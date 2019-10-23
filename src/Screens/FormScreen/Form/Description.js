import React, { useContext } from 'react';
import { View, TextInput } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';

const Description = ({ description, setDescription }) => {
  const { theme, themeType } = useContext(ThemesContext);
  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).descriptionContainer}>
        <TextInput
          style={styles(theme).description}
          keyboardAppearance={themeType == 'light' ? 'light' : 'dark'}
          multiline
          minHeight={100}
          scrollEnabled={false}
          placeholder="task description"
          placeholderTextColor={theme.placeholderText}
          selectionColor={theme.primary}
          value={description}
          onChangeText={input => setDescription(input)}
          onBlur={() => setDescription(description.trim())}
        />
      </View>
    </View>
  );
};

const styles = theme => {
  return {
    container: {
      paddingTop: 22,
    },
    descriptionContainer: {
      backgroundColor: theme.base02,
      borderRadius: 15,
      paddingHorizontal: 20,
      paddingVertical: 15,
    },
    description: {
      fontSize: 18,
      color: theme.text01,
    },
  };
};

export default Description;
