import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { ThemesContext } from '../../Context/ThemesContext';

const Header = ({ navigation, isSaveDisabled, saveTask }) => {
  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles(theme).button}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={saveTask} disabled={isSaveDisabled}>
        <Text
          style={[
            styles(theme).button,
            isSaveDisabled && styles(theme).buttonDisbaled,
          ]}
        >
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = theme => {
  return {
    container: {
      paddingVertical: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      color: theme.primary,
      fontSize: 20,
    },
    buttonDisbaled: {
      color: theme.text01,
      opacity: 0.3,
    },
  };
};

export default withNavigation(Header);
