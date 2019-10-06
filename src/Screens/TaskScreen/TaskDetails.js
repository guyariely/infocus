import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemesContext } from '../../Context/ThemesContext';

const TaskDetails = ({ title, description }) => {
  const { theme } = useContext(ThemesContext);
  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).title}>{title}</Text>
      {!!description && (
        <Text style={styles(theme).description}>{description}</Text>
      )}
    </View>
  );
};

const styles = theme => {
  return {
    container: {},
    title: {
      color: theme.text01,
      fontSize: 40,
      fontWeight: '600',
      textAlign: 'center',
      paddingTop: 25,
    },
    description: {
      paddingTop: 25,
      color: theme.text01,
      fontSize: 20,
      textAlign: 'center',
    },
  };
};

export default TaskDetails;
