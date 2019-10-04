import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemesContext } from '../Context/ThemesContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Counter = ({ task, style }) => {
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
        <Icon color={theme.primary} name="check" size={30} />
      ) : (
        <CounterText text="LEFT" />
      )}
    </View>
  );
};

const secondsParser = seconds => {
  let minutes = 0;
  while (seconds > 0) {
    seconds -= 60;
    minutes++;
  }

  let hours = 0;
  while (minutes >= 60) {
    minutes -= 60;
    hours++;
  }

  return { hours, minutes };
};

export default Counter;
