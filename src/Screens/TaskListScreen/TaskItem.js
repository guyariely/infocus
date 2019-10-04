import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ThemesContext } from '../../Context/ThemesContext';
import Counter from '../../Components/Counter';

const TaskItem = ({ task }) => {
  const { theme } = useContext(ThemesContext);

  return (
    <TouchableOpacity style={styles(theme).container}>
      <View style={styles(theme).main}>
        <View style={styles(theme).titleContainer}>
          <Text style={styles(theme).title} numberOfLines={1}>
            {task.title}
          </Text>
        </View>
        <Counter task={task} style={{ counter: styles(theme).counter }} />
      </View>
      {!!task.description && (
        <Text style={styles(theme).description} numberOfLines={2}>
          {task.description}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = theme => {
  return {
    container: {
      borderColor: theme.primary,
      borderWidth: 1,
      borderRadius: 15,
      padding: 20,
      marginBottom: 15,
    },
    main: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    titleContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingRight: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: '600',
      color: theme.text01,
    },
    counter: {
      container: {
        flexDirection: 'row',
      },
      counterText: {
        marginTop: 6.5,
        color: theme.text02,
        fontSize: 16,
      },
    },
    description: {
      paddingTop: 12,
      fontSize: 16,
      color: theme.text01,
    },
  };
};

export default TaskItem;
