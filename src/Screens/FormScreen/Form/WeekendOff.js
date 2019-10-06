import React, { useContext } from 'react';
import { View, Text, Switch } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';

const WeekendOff = ({ weekendOff, setWeekendOff }) => {
  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).textContainer}>
        <Text style={styles(theme).text}>Take the weekend off</Text>
      </View>
      <Switch
        value={weekendOff}
        onValueChange={bool => setWeekendOff(bool)}
        trackColor={{ true: theme.primary }}
      />
    </View>
  );
};

const styles = theme => {
  return {
    container: {
      paddingVertical: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    textContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    text: {
      color: theme.text01,
      fontSize: 20,
    },
  };
};

export default WeekendOff;
