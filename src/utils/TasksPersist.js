import { AsyncStorage } from 'react-native';
import uuid from 'uuid';
import { createStats, updateStats } from './statsUtils';

// AsyncStorage.removeItem('tasks').then();

const getTasks = async () => {
  try {
    let tasks = await AsyncStorage.getItem('tasks');
    tasks = JSON.parse(tasks);
    if (!tasks) {
      return [];
    }
    if (tasks[0].stats[6].date != new Date().toLocaleDateString()) {
      resetTasks(tasks).then(newTasks => (tasks = newTasks));
    }
    return tasks;
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
  const stats = createStats(task.dailyGoal);
  try {
    const newTask = {
      id: uuid.v4(),
      title: task.title,
      dailyGoal: task.dailyGoal,
      dailyProgress: 0,
      weekendOff: task.weekendOff,
      description: task.description,
      stats: stats,
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
    const updatedTask = tasks.find((task, i) => {
      if (task.id == id) {
        Object.keys(updates).forEach(update => {
          tasks[i][update] = updates[update];
        });
        return tasks[i];
      }
    });
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    return updatedTask;
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async id => {
  try {
    const tasks = await getTasks();
    const filteredTasks = tasks.filter(task => task.id != id);
    await AsyncStorage.setItem('tasks', JSON.stringify(filteredTasks));
    return filteredTasks;
  } catch (error) {
    console.log(error);
  }
};

const resetTasks = async tasks => {
  tasks = tasks.map(task => {
    task.dailyProgress = 0;
    task.stats = updateStats(task.dailyGoal, task.stats);
    return task;
  });
  await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  return tasks;
};

const resetTask = async task => {
  const updates = {
    dailyProgress: 0,
    stats: updateStats(task.dailyGoal, task.stats),
  };
  const updatedTask = await updateTask(task.id, updates);
  return updatedTask;
};

export { getTasks, getTask, createTask, updateTask, deleteTask, resetTask };
