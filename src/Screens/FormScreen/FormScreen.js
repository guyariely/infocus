import React, { useState, useContext } from 'react';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import { ThemesContext } from '../../Context/ThemesContext';
import { createTask, updateTask } from '../../utils/TasksPersist';
import Header from './Header';
import Form from './Form/Form';

const FormScreen = ({ navigation }) => {
  const { theme } = useContext(ThemesContext);

  const id = navigation.getParam('id');
  const task = navigation.getParam('task', {
    title: '',
    dailyGoal: 1800,
    weekendOff: false,
    description: '',
  });

  const [title, setTitle] = useState(task.title);
  const [dailyGoal, setDailyGoal] = useState(task.dailyGoal);
  const [weekendOff, setWeekendOff] = useState(task.weekendOff);
  const [description, setDescription] = useState(task.description);

  const saveTask = async () => {
    if (!id) {
      await createTask({ title, dailyGoal, weekendOff, description });
    }
    await updateTask(id, { title, dailyGoal, weekendOff, description });
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingScrollView style={styles(theme).container}>
      <Header isSaveDisabled={!title || !dailyGoal} saveTask={saveTask} />
      <Form
        title={title}
        setTitle={setTitle}
        dailyGoal={dailyGoal}
        setDailyGoal={setDailyGoal}
        weekendOff={weekendOff}
        setWeekendOff={setWeekendOff}
        description={description}
        setDescription={setDescription}
      />
    </KeyboardAvoidingScrollView>
  );
};

const styles = theme => {
  return {
    container: {
      flex: 1,
      backgroundColor: theme.base01,
      paddingHorizontal: 25,
    },
  };
};

export default FormScreen;
