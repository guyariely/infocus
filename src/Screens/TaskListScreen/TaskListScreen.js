import React, { useEffect, useState, useContext } from 'react';
import { View, ScrollView } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { ThemesContext } from '../../Context/ThemesContext';
import { getTasks, deleteTask } from '../../utils/tasksPersist';
import Header from './Header';
import Searchbar from './Searchbar';
import TaskList from './TaskList';

function TaskListScreen(props) {
  const { theme } = useContext(ThemesContext);

  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState(null);

  useEffect(() => {
    getTasks().then(tasks => setTasks(tasks));
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
      <Header isFocused={props.isFocused} />
      <ScrollView
        contentOffset={{ x: 0, y: 60 }}
        contentContainerStyle={styles(theme).scrollview}
      >
        <Searchbar tasks={tasks} setFilteredTasks={setFilteredTasks} />
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
