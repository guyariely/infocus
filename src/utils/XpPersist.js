import { AsyncStorage } from 'react-native';

const getXP = async () => {
  try {
    const XP = await AsyncStorage.getItem('XP');
    if (!XP) {
      await AsyncStorage.setItem('XP', JSON.stringify(0));
      return 0;
    }
    return JSON.parse(XP);
  } catch (error) {
    console.log(error);
  }
};

const updateXP = async progress => {
  try {
    const XP = await getXP();
    await AsyncStorage.setItem('XP', JSON.stringify(XP + progress));
  } catch (error) {
    console.log(error);
  }
};

export { getXP, updateXP };
