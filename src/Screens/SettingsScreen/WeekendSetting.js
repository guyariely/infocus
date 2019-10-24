import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemesContext } from '../../Context/ThemesContext';
import { WeekendContext } from '../../Context/WeekendContext';
import SettingButton from './SettingButton';

const WeekendSetting = ({}) => {
  const { theme } = useContext(ThemesContext);
  const { weekendDays, updateWeekendDays } = useContext(WeekendContext);

  const options = [
    { title: 'Saturday - Sunday', value: [0, 6] },
    { title: 'Friday - Saturday', value: [5, 6] },
    { title: 'Sunday', value: [0] },
  ];

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).heading}>WEEKEND</Text>
      <View style={styles(theme).options}>
        {options.map(option => {
          return (
            <View style={styles(theme).option} key={option.title}>
              <SettingButton
                title={option.title}
                isActive={option.value.toString() == weekendDays.toString()}
                onPress={() => updateWeekendDays(option.value)}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = theme => {
  return {
    heading: {
      paddingVertical: 20,
      fontSize: 20,
      fontWeight: '600',
      color: theme.primary,
    },
    option: {
      marginBottom: 15,
    },
  };
};

export default WeekendSetting;
