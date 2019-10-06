import { AsyncStorage } from 'react-native';
import uuid from 'uuid';

// AsyncStorage.removeItem('tasks').then();

const getTasks = async () => {
  try {
    const tasks = await AsyncStorage.getItem('tasks');
    if (!tasks) {
      return [];
    }
    return JSON.parse(tasks);
  } catch (error) {
    console.log(error);
  }
};

const getTask = async id => {
  try {
    const tasks = await getTasks();
    const task = tasks.find(task => task.id == id);
    if (task) {
      return task;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};

const createTask = async task => {
  // TODO: add stats property
  try {
    const newTask = {
      id: uuid.v4(),
      title: task.title,
      dailyGoal: task.dailyGoal,
      dailyProgress: 0,
      weekendOff: task.weekendOff,
      description: task.description,
    };
    const tasks = await getTasks();
    tasks.push(newTask);
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.log(error);
  }
};

const updateTask = async (id, updates) => {
  try {
    const tasks = await getTasks();
    tasks.some(task => {
      if (task.id == id) {
        Object.keys(updates).forEach(
          update => (task[update] = updates[update])
        );
        return true;
      }
    });
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async id => {
  try {
    const tasks = await getTasks();
    const filteredTasks = tasks.filter(task => task.id != id);
    await AsyncStorage.setItem('tasks', JSON.stringify(filteredTasks));
  } catch (error) {
    console.log(error);
  }
};

export { getTasks, getTask, createTask, updateTask, deleteTask };
