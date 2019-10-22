import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ThemesContext } from '../../Context/ThemesContext';
import Header from './Header';

const SettingsScreen = ({}) => {
  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).container}>
      <Header />
      <View style={styles(theme).setting}>
        <Text style={styles(theme).heading}>THEMES</Text>
        <View style={styles(theme).themes}>
          <TouchableOpacity style={styles(theme).option}>
            <Text style={styles(theme).title}>Light</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles(theme).option, styles(theme).darkThemeOption]}
          >
            <Text style={[styles(theme).title, styles(theme).darkThemeTitle]}>
              Dark
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = theme => {
  return {
    container: {
      flex: 1,
      backgroundColor: theme.base01,
      paddingHorizontal: 25,
    },
    heading: {
      paddingVertical: 20,
      fontSize: 20,
      fontWeight: '600',
      color: theme.primary,
    },
    themes: {
      flexDirection: 'row',
    },
    option: {
      flex: 1,
      borderColor: theme.primary,
      borderWidth: 1,
      borderRadius: 5,
      padding: 15,
    },
    title: {
      color: theme.text01,
      fontSize: 18,
    },
    darkThemeOption: {
      marginLeft: 20,
      backgroundColor: '#3D3D3D',
      borderWidth: 0,
    },
    darkThemeTitle: {
      color: '#FAFAFA',
    },
  };
};

export default SettingsScreen;
