import React, { useEffect, useState, useContext } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { ThemesContext } from '../../Context/ThemesContext';
import { getTasks, deleteTask } from '../../utils/tasksPersist';
import Header from './Header';
import TaskList from './TaskList';

function TaskListScreen(props) {
  const { theme } = useContext(ThemesContext);

  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState(null);

  useEffect(() => {
    getTasks().then(tasks => setTasks(tasks.reverse()));
  }, [props.isFocused]);

  const removeTask = id => {
    deleteTask(id).then(tasks => {
      setTasks(tasks);
      if (filteredTasks != null) {
        setFilteredTasks(filteredTasks.filter(task => task.id != id));
      }
    });
  };

  return (
    <View style={styles(theme).container}>
      <ScrollView contentContainerStyle={styles(theme).scrollview}>
        <Header tasks={tasks} setFilteredTasks={setFilteredTasks} />
        {tasks.length > 0 && (
          <TaskList
            tasks={filteredTasks != null ? filteredTasks : tasks}
            deleteTask={removeTask}
          />
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
      paddingBottom: 30,
    },
  };
};

export default withNavigationFocus(TaskListScreen);
