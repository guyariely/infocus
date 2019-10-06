import React, { useEffect, useState, useContext } from 'react';
import { useInterval } from '../../Hooks/useInterval';
import { View, Text } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { ThemesContext } from '../../Context/ThemesContext';
import { getTask, updateTask } from '../../utils/TasksPersist';
import Header from './Header';
import TaskDetails from './TaskDetails';
import Counter from '../../Components/Counter';
import TaskPlayer from './TaskPlayer';

const TaskScreen = ({ navigation, isFocused }) => {
  const { theme } = useContext(ThemesContext);

  const [task, setTask] = useState(navigation.getParam('task'));
  const [isPlaying, setIsPlaying] = useState(false);

  const id = navigation.getParam('id');
  useEffect(() => {
    getTask(id).then(task => setTask(task));
  }, [isFocused]);

  const focus = async () => {
    if (isPlaying) {
      if (task.dailyGoal == task.dailyProgress) return;

      const updatedTask = { ...task };
      updatedTask.dailyProgress++;
      setTask(updatedTask);
      await updateTask(task.id, { dailyProgress: updatedTask.dailyProgress });
    }
  };
  useInterval(focus, 1000);

  return (
    <View style={styles(theme).container}>
      <Header task={task} pauseTask={() => setIsPlaying(false)} />
      <TaskDetails title={task.title} description={task.description} />
      {task.dailyProgress == task.dailyGoal && (
        <Text style={styles(theme).completetionText}>DAILY GOAL COMPLETED</Text>
      )}
      <Counter
        task={task}
        style={{ counter: styles(theme).counter }}
        iconSize={60}
      />
      {task.dailyProgress != task.dailyGoal && (
        <TaskPlayer
          task={task}
          isPlaying={isPlaying}
          setIsPlaying={() => setIsPlaying(isPlaying => !isPlaying)}
        />
      )}
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
    completetionText: {
      textAlign: 'center',
      paddingVertical: 40,

      color: theme.text02,
      fontSize: 20,
    },
  };
};

export default withNavigationFocus(TaskScreen);
