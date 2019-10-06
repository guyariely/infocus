import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { ThemesContext } from '../../Context/ThemesContext';
import Header from './Header';
import TaskDetails from './TaskDetails';
import Counter from '../../Components/Counter';

const TaskScreen = ({ navigation }) => {
  const { theme } = useContext(ThemesContext);

  const task = navigation.getParam('task');
  // const task = {
  //   id: 'wfen33kmfds',
  //   title: 'Practice mathematics',
  //   dailyGoal: 32560,
  //   dailyProgress: 10,
  //   weekendOff: true,
  //   description: `"Barge of the Dead" is an episode from the sixth season of the American science fiction television series Star Trek: Voyager. First broadcast by UPN on October 6, 1999`,
  // };

  return (
    <View style={styles(theme).container}>
      <Header />
      <TaskDetails title={task.title} description={task.description} />
      <Counter task={task} style={{ counter: styles(theme).counter }} />
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
    counter: {
      container: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 40,
      },
      counterText: {
        color: theme.text02,
        fontSize: 22,
      },
    },
  };
};

export default TaskScreen;
