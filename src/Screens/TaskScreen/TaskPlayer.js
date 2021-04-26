import React, { useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ThemesContext } from '../../Context/ThemesContext';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Icon from 'react-native-vector-icons/Ionicons';

const TaskPlayer = ({ cachedTime, task, isPlaying, setIsPlaying }) => {
  const { theme } = useContext(ThemesContext);

  const duration =
    1500 / Math.round((new Date().getTime() - cachedTime) / 1000);

  return (
    <View style={styles(theme).container}>
      <AnimatedCircularProgress
        size={140}
        width={6}
        fill={100 * (task.dailyProgress / task.dailyGoal)}
        rotation={0}
        duration={duration}
        tintColor={theme.primary}
        backgroundColor={theme.primary02}
      >
        {() => (
          <TouchableOpacity
            style={styles(theme).playerButton}
            onPress={setIsPlaying}
          >
            <View style={isPlaying ? styles(theme).pause : styles(theme).play}>
              <Icon
                color={'rgba(250, 250, 250, 1)'}
                name={isPlaying ? 'ios-pause' : 'ios-play'}
                size={80}
              />
            </View>
          </TouchableOpacity>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};

const styles = theme => {
  return {
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    playerButton: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.primary,
      borderRadius: 100,
      height: 110,
      width: 110,
      shadowColor: theme.text01,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.3,
    },
    play: {
      marginLeft: 10,
    },
    pause: {
      marginLeft: 5,
    },
  };
};

export default TaskPlayer;
