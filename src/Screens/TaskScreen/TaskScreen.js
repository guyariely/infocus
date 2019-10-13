import React, { useEffect, useState, useContext } from 'react';
import { useInterval } from '../../Hooks/useInterval';
import { View, Text } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { ThemesContext } from '../../Context/ThemesContext';
import { getTask, updateTask, resetTask } from '../../utils/tasksPersist';
import Header from './Header';
import TaskDetails from './TaskDetails';
import Counter from '../../Components/Counter';
import TaskPlayer from './TaskPlayer';

const TaskScreen = ({ navigation, isFocused }) => {
  const { theme } = useContext(ThemesContext);

  const [task, setTask] = useState(navigation.getParam('task'));
  const [isPlaying, setIsPlaying] = useState(false);
  const [cachedTime, setCachedTime] = useState(null);

  const id = navigation.getParam('id');
  useEffect(() => {
    getTask(id).then(task => setTask(task));
  }, [isFocused]);

  const focus = async () => {
    if (task.stats[6].date != new Date().toLocaleDateString()) {
      const updatedTask = await resetTask(task);
      return setTask(updatedTask);
    }

    if (isPlaying) {
      if (task.dailyGoal >= task.dailyProgress) {
        return setIsPlaying(false);
      }
      const progress = Math.round((new Date().getTime() - cachedTime) / 1000);

      const updatedStats = task.stats;
      const { dailyProgress, dailyGoal } = updatedStats[6];
      updatedStats[6].dailyProgress = Math.min(
        dailyProgress + progress,
        dailyGoal
      );

      const updatedTask = await updateTask(task.id, {
        dailyProgress: task.dailyProgress + progress,
        stats: updatedStats,
      });
      setTask(updatedTask);
      setCachedTime(new Date().getTime());
    }
  };
  useInterval(focus, 1000);

  return (
    <View style={styles(theme).container}>
      <Header task={task} pauseTask={() => setIsPlaying(false)} />
      <TaskDetails title={task.title} description={task.description} />
      {task.dailyProgress >= task.dailyGoal && (
        <Text style={styles(theme).completetionText}>DAILY GOAL COMPLETED</Text>
      )}
      <Counter
        task={task}
        style={{ counter: styles(theme).counter }}
        iconSize={60}
      />
      {task.dailyProgress < task.dailyGoal && (
        <TaskPlayer
          cachedTime={cachedTime}
          task={task}
          isPlaying={isPlaying}
          setIsPlaying={() => {
            setCachedTime(new Date().getTime());
            setIsPlaying(isPlaying => !isPlaying);
          }}
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
