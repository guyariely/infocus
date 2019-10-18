import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { WeekendContext } from '../Context/WeekendContext';
import { ThemesContext } from '../Context/ThemesContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import secondsParser from '../utils/secondsParser';

const Counter = ({ task, style, iconSize }) => {
  const { theme } = useContext(ThemesContext);
  const { isWeekend } = useContext(WeekendContext);

  const remainingSeconds = task.dailyGoal - task.dailyProgress;

  const { hours, minutes } = secondsParser(remainingSeconds);

  const CenteredText = ({ text }) => {
    return (
      <View style={style.counter.counterTextContainer}>
        <Text style={style.counter.counterText}>{text}</Text>
      </View>
    );
  };

  if (task.weekendOff && isWeekend()) {
    return (
      <View style={style.counter.container}>
        <CenteredText text="WEEKEND OFF" />
      </View>
    );
  }

  return (
    <View style={style.counter.container}>
      {hours > 0 && <CenteredText text={hours + ' HR '} />}
      {minutes > 0 && <CenteredText text={minutes + ' MIN '} />}
      {minutes === 0 && hours === 0 ? (
        <Icon color={theme.primary} name="check" size={iconSize} />
      ) : (
        <CenteredText text="LEFT" />
      )}
    </View>
  );
};

export default Counter;
