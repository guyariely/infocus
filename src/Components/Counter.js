import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemesContext } from '../Context/ThemesContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import secondsParser from '../utils/secondsParser';

const Counter = ({ task, style, iconSize }) => {
  const { theme } = useContext(ThemesContext);

  const remainingSeconds = task.dailyGoal - task.dailyProgress;

  const { hours, minutes } = secondsParser(remainingSeconds);

  const CounterText = ({ text }) => {
    return (
      <View style={style.counter.counterTextContainer}>
        <Text style={style.counter.counterText}>{text}</Text>
      </View>
    );
  };

  return (
    <View style={style.counter.container}>
      {hours > 0 && <CounterText text={hours + ' HR '} />}
      {minutes > 0 && <CounterText text={minutes + ' MIN '} />}
      {minutes === 0 && hours === 0 ? (
        <Icon color={theme.primary} name="check" size={iconSize} />
      ) : (
        <CounterText text="LEFT" />
      )}
    </View>
  );
};

export default Counter;
