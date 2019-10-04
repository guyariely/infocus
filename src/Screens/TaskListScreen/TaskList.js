import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemesContext } from '../../Context/ThemesContext';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {
  const { theme } = useContext(ThemesContext);

  const uncompletedTasks = [];
  const completedTasks = [];

  tasks.forEach(task => {
    task.dailyGoal === task.dailyProgress
      ? completedTasks.push(task)
      : uncompletedTasks.push(task);
  });

  return (
    <View style={styles(theme).container}>
      {uncompletedTasks.length > 0 &&
        uncompletedTasks.map(task => {
          return <TaskItem key={task.id} task={task} />;
        })}

      {completedTasks.length > 0 && (
        <Text style={styles(theme).header}>COMPLETED</Text>
      )}
      {completedTasks.length > 0 &&
        completedTasks.map(task => {
          return <TaskItem key={task.id} task={task} />;
        })}
    </View>
  );
};

const styles = theme => {
  return {
    container: { flex: 1 },
    header: {
      color: theme.primary,
      fontWeight: '600',
      paddingHorizontal: 5,
      marginVertical: 15,
      fontSize: 20,
    },
  };
};

export default TaskList;
