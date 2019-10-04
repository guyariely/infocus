import React, { useEffect, useState, useContext } from 'react';
import { View, ScrollView } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { ThemesContext } from '../../Context/ThemesContext';
import Header from './Header';
import TaskList from './TaskList';
import _tasks from '../../../tasks';

function TaskListScreen(props) {
  const { theme } = useContext(ThemesContext);

  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState(null);

  useEffect(() => {
    setTasks(_tasks);
  }, [props.isFocused]);

  return (
    <View style={styles(theme).container}>
      <ScrollView contentContainerStyle={styles(theme).scrollview}>
        <Header tasks={tasks} setFilteredTasks={setFilteredTasks} />
        {tasks.length > 0 && (
          <TaskList tasks={filteredTasks != null ? filteredTasks : tasks} />
        )}
      </ScrollView>
    </View>
  );
}

const styles = theme => {
  return {
    container: {
      flex: 1,
      backgroundColor: theme.base01,
    },
    scrollview: {
      paddingHorizontal: 25,
      paddingBottom: 30,
    },
  };
};

export default withNavigationFocus(TaskListScreen);
