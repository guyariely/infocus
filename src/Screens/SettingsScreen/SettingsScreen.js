import React, { useContext } from 'react';
import { View } from 'react-native';
import { ThemesContext } from '../../Context/ThemesContext';
import Header from './Header';
import ThemeSetting from './ThemeSetting';
import WeekendSetting from './WeekendSetting';

const SettingsScreen = ({}) => {
  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).container}>
      <Header />
      <ThemeSetting />
      <WeekendSetting />
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
  };
};

export default SettingsScreen;
