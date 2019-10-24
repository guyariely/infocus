import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemesContext } from '../../Context/ThemesContext';
import themes from '../../Constants/themes';
import SettingButton from './SettingButton';

const ThemeSetting = ({}) => {
  const { theme, themeType, toggleTheme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).heading}>THEMES</Text>
      <View style={styles(theme).themes}>
        <SettingButton
          title="Light"
          style={lightThemeStyles}
          isActive={themeType == 'light'}
          onPress={() => toggleTheme(themes.default)}
        />
        <SettingButton
          title="Dark"
          style={darkThemeStyles}
          isActive={themeType == 'dark'}
          onPress={() => toggleTheme(themes.dark)}
        />
      </View>
    </View>
  );
};

const darkThemeStyles = {
  container: {
    marginLeft: 20,
    backgroundColor: '#3D3D3D',
  },
  title: {
    color: '#FAFAFA',
  },
};

const lightThemeStyles = {
  container: {
    backgroundColor: 'rgba(250, 250, 250, 1)',
  },
  title: {
    color: 'rgba(0, 0, 0, 1)',
  },
};

const styles = theme => {
  return {
    heading: {
      paddingVertical: 20,
      fontSize: 20,
      fontWeight: '600',
      color: theme.primary,
    },
    themes: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  };
};

export default ThemeSetting;
