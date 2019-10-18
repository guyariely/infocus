import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemesContext } from '../../Context/ThemesContext';
import TaskItem from './TaskItem';
import isWeekend from '../../utils/isWeekend';

const TaskList = ({ tasks, deleteTask }) => {
  const { theme } = useContext(ThemesContext);

  const uncompletedTasks = [];
  const completedTasks = [];
  const weekendOffTasks = [];

  tasks.forEach(task => {
    if (task.weekendOff == true && isWeekend()) {
      return weekendOffTasks.push(task);
    }
    task.dailyProgress >= task.dailyGoal
      ? completedTasks.push(task)
      : uncompletedTasks.push(task);
  });

  return (
    <View style={styles(theme).container}>
      {uncompletedTasks.length > 0 &&
        uncompletedTasks.map(task => {
          return <TaskItem key={task.id} task={task} deleteTask={deleteTask} />;
        })}
      {completedTasks.length > 0 && (
        <View>
          <Text style={styles(theme).header}>COMPLETED</Text>
          {completedTasks.map(task => {
            return (
              <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
            );
          })}
        </View>
      )}
      {weekendOffTasks.length > 0 && (
        <View>
          <Text style={styles(theme).header}>WEEKEND OFF</Text>
          {weekendOffTasks.map(task => {
            return (
              <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = theme => {
  return {
    container: { flex: 1 },
    header: {
      color: theme.primary,
      fontWeight: '600',
      marginVertical: 15,
      fontSize: 20,
      paddingHorizontal: 30,
    },
  };
};

export default TaskList;
