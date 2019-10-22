import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ThemesContext } from '../../Context/ThemesContext';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getStreak } from '../../utils/streakPersist';
import { getXP } from '../../utils/XpPersist';
import formatXP from '../../utils/formatXP';

const Header = ({ navigation, isFocused }) => {
  const { theme } = useContext(ThemesContext);

  const [streak, setStreak] = useState(0);
  const [XP, setXP] = useState(0);

  useEffect(() => {
    const updateMetrics = async () => {
      const streak = await getStreak();
      setStreak(streak);
      const XP = await getXP();
      setXP(formatXP(XP));
    };
    updateMetrics();
  }, [isFocused]);

  const alertStreak = () => {
    alert(
      `Your streak increases for every day you focus on one of your tasks. Be careful not to miss any day or you will lose your streak!`
    );
  };

  const alertXP = () => {
    alert(
      `Your focus points will increase for every second you focus on your tasks. Keep focusing on your tasks to rack up more focus points.`
    );
  };

  return (
    <View style={styles(theme).container}>
      <TouchableOpacity onPress={() => navigation.push('SettingsScreen')}>
        <Icon color={theme.primary} name="tune" size={24} />
      </TouchableOpacity>
      <TouchableOpacity style={styles(theme).metric} onPress={alertStreak}>
        <Icon color={theme.text02} name="whatshot" size={24} />
        <View style={styles(theme).metricTextContainer}>
          <Text style={styles(theme).metricText}>{streak.value}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles(theme).metric} onPress={alertXP}>
        <Icon color={theme.text02} name="access-time" size={24} />
        <View style={styles(theme).metricTextContainer}>
          <Text style={styles(theme).metricText}>{XP}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('FormScreen')}>
        <Icon color={theme.primary} name="add" size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = theme => {
  return {
    container: {
      paddingVertical: 15,
      paddingHorizontal: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    metric: {
      flexDirection: 'row',
    },
    metricTextContainer: {
      justifyContent: 'center',
    },
    metricText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.text02,
      paddingLeft: 6,
    },
  };
};

export default withNavigation(Header);
