import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ThemesContext } from '../../Context/ThemesContext';
import { withNavigation } from 'react-navigation';
import Swipeout from 'react-native-swipeout';
import Counter from '../../Components/Counter';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TaskItem = ({ navigation, task, deleteTask }) => {
  const { theme } = useContext(ThemesContext);

  const RemoveButton = () => {
    return (
      <TouchableOpacity
        style={styles(theme).removeButton}
        onPress={() => deleteTask(task.id)}
      >
        <View style={styles(theme).removeButtonContainer}>
          <Icon color={theme.primary} name="delete" size={32} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeout
      right={[
        {
          backgroundColor: 'transparent',
          component: <RemoveButton />,
        },
      ]}
      style={styles(theme).container}
    >
      <TouchableOpacity
        style={styles(theme).task}
        onPress={() => navigation.push('TaskScreen', { task, id: task.id })}
      >
        <View style={styles(theme).main}>
          <View style={styles(theme).titleContainer}>
            <Text style={styles(theme).title} numberOfLines={1}>
              {task.title}
            </Text>
          </View>
          <Counter
            task={task}
            style={{ counter: styles(theme).counter }}
            iconSize={30}
          />
        </View>
        {!!task.description && (
          <Text style={styles(theme).description} numberOfLines={2}>
            {task.description}
          </Text>
        )}
      </TouchableOpacity>
    </Swipeout>
  );
};

const styles = theme => {
  return {
    container: {
      backgroundColor: theme.base01,
      marginBottom: 15,
      paddingRight: 30,
      paddingLeft: 30,
    },
    task: {
      flex: 1,
      borderColor: theme.primary,
      backgroundColor: theme.base01,
      borderWidth: 1,
      borderRadius: 15,
      padding: 20,
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
    removeButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    removeButton: {
      flex: 1,
      justifyContent: 'center',
      marginLeft: 5,
    },
  };
};

export default withNavigation(TaskItem);
