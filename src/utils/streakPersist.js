import { AsyncStorage } from 'react-native';

// AsyncStorage.removeItem('streak');
// AsyncStorage.removeItem('XP');

const getStreak = async () => {
  try {
    let streak = await AsyncStorage.getItem('streak');
    streak = JSON.parse(streak);
    if (!streak) {
      streak = {
        value: 0,
        lastUpdate: null,
      };
    } else if (!getStreakStatus(streak.lastUpdate)) {
      streak.value = 0;
    }
    await AsyncStorage.setItem('streak', JSON.stringify(streak));
    return streak;
  } catch (error) {
    console.log(error);
  }
};

const updateStreak = async () => {
  try {
    let streak = await AsyncStorage.getItem('streak');
    streak = JSON.parse(streak);
    const today = new Date().toDateString();
    const lastUpdate = new Date(streak.lastUpdate).toDateString();
    if (lastUpdate == today) {
      return streak;
    }
    streak.value += 1;
    streak.lastUpdate = new Date();
    await AsyncStorage.setItem('streak', JSON.stringify(streak));
    return streak;
  } catch (error) {
    console.log(error);
  }
};

const getStreakStatus = lastUpdate => {
  if (lastUpdate == null) {
    return true;
  }
  const lastUpdateDay = new Date(lastUpdate);
  const lastUpdateFollowingDay = new Date(lastUpdateDay);
  lastUpdateFollowingDay.setDate(lastUpdateDay.getDate() + 1);

  const today = new Date().toDateString();

  if (
    today != lastUpdateDay.toDateString() &&
    today != lastUpdateFollowingDay.toDateString()
  ) {
    return false;
  }
  return true;
};

export { getStreak, updateStreak };
