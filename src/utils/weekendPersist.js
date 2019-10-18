import { AsyncStorage } from 'react-native';

const getWeekendDays = async () => {
  try {
    const weekendDays = await AsyncStorage.getItem('weekendDays');
    if (weekendDays) {
      return JSON.parse(weekendDays);
    }
    return [0, 6];
  } catch (error) {
    console.log(error);
  }
};

const saveWeekendDays = async weekendDays => {
  try {
    await AsyncStorage.setItem('weekendDays', JSON.stringify(weekendDays));
  } catch (error) {
    console.log(error);
  }
};

export { getWeekendDays, saveWeekendDays };
