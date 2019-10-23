import React, { useEffect, useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';
import Picker from 'react-native-picker-select';
import secondsParser from '../../../utils/secondsParser';

const DailyGoal = ({ dailyGoal, setDailyGoal }) => {
  const { theme } = useContext(ThemesContext);

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(30);

  useEffect(() => {
    const { hours, minutes } = secondsParser(dailyGoal);
    setHours(hours);
    setMinutes(minutes);
  }, []);

  const hoursRange = [];
  const minutesRange = [];

  for (let i = 1; i <= 23; i++) {
    hoursRange.push({
      label: i < 10 ? `0${i}h` : `${i}h`,
      value: i,
      color: theme.text01,
    });
  }

  for (let i = 1; i <= 59; i++) {
    minutesRange.push({
      label: i < 10 ? `0${i}m` : `${i}m`,
      value: i,
      color: theme.text01,
    });
  }

  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).dailyGoal}>
        <Text style={styles(theme).title}>DAILY GOAL</Text>
        <View style={styles(theme).inputs}>
          <Picker
            style={pickerStyles(theme)}
            placeholder={{ label: '00h', color: theme.placeholderText }}
            placeholderTextColor={theme.placeholderText}
            items={hoursRange}
            value={hours}
            onValueChange={hours => {
              setHours(hours);
              setDailyGoal(hours * 3600 + minutes * 60);
            }}
          />
          <Picker
            style={pickerStyles(theme)}
            placeholder={{ label: '00m', color: theme.placeholderText }}
            placeholderTextColor={theme.placeholderText}
            items={minutesRange}
            value={minutes}
            onValueChange={minutes => {
              setMinutes(minutes);
              setDailyGoal(minutes * 60 + hours * 3600);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = theme => {
  return {
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical: 60,
    },
    dailyGoal: {
      flexDirection: 'column',
    },
    title: {
      fontSize: 40,
      fontWeight: '400',
      color: theme.text01,
    },
    inputs: {
      paddingTop: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  };
};

const pickerStyles = theme => {
  return {
    modalViewMiddle: {
      backgroundColor: theme.base02,
      borderTopWidth: 0,
    },
    modalViewBottom: {
      backgroundColor: theme.base02,
    },
    chevronContainer: {
      opacity: 0.1,
    },
    done: {
      color: theme.primary,
    },
    inputIOS: {
      height: 45,
      color: theme.text01,
      fontSize: 52,
    },
    inputAndroid: {
      height: 45,
      color: theme.text01,
      fontSize: 52,
    },
  };
};

export default DailyGoal;
