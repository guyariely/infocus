import React, { useState, useEffect, useContext } from 'react';
import { View, StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { SafeAreaView } from 'react-navigation';
import StackNavigator from './src/Screens/StackNavigator';
import WeekendContextProvider from './src/Context/WeekendContext';
import ThemesContextProvider from './src/Context/ThemesContext';
import { ThemesContext } from './src/Context/ThemesContext';
import { getTheme } from './src/utils/themePersist';

const AppContainer = () => {
  const [appLoading, setAppLoading] = useState(true);
  const { theme, themeType, toggleTheme } = useContext(ThemesContext);

  useEffect(() => {
    getTheme()
      .then(theme => {
        if (theme) {
          toggleTheme(theme);
        }
        setAppLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  if (appLoading) {
    return <AppLoading />;
  }

  return (
    <View style={styles(theme).appContainer}>
      <StatusBar
        barStyle={themeType == 'light' ? 'dark-content' : 'light-content'}
      />
      <SafeAreaView style={{ flex: 1 }} forceInset={{ bottom: 'never' }}>
        <StackNavigator />
      </SafeAreaView>
    </View>
  );
};

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <WeekendContextProvider>
        <ThemesContextProvider>
          <AppContainer />
        </ThemesContextProvider>
      </WeekendContextProvider>
    </View>
  );
};

const styles = theme => {
  return {
    app: {
      flex: 1,
    },
    appContainer: {
      flex: 1,
      backgroundColor: theme.base01,
    },
  };
};

export default App;
