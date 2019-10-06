import React, { useEffect, useState, useContext } from 'react';
import { View } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { ThemesContext } from '../../Context/ThemesContext';
import { getTask } from '../../utils/TasksPersist';
import Header from './Header';
import TaskDetails from './TaskDetails';
import Counter from '../../Components/Counter';

const TaskScreen = ({ navigation, isFocused }) => {
  const { theme } = useContext(ThemesContext);

  const [task, setTask] = useState(navigation.getParam('task'));

  const id = navigation.getParam('id');

  useEffect(() => {
    getTask(id).then(task => setTask(task));
  }, [isFocused]);

  return (
    <View style={styles(theme).container}>
      <Header task={task} />
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

export default withNavigationFocus(TaskScreen);
