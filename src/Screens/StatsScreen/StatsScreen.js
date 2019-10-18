import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { WeekendContext } from '../../Context/WeekendContext';
import { ThemesContext } from '../../Context/ThemesContext';
import Header from './Header';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const interpolateColor = (color, opacity) => {
  return color.slice(0, color.length - 3) + opacity + ')';
};

const StatsScreen = ({ navigation }) => {
  const { theme } = useContext(ThemesContext);
  const { weekendDays } = useContext(WeekendContext);

  const { title, weekendOff } = navigation.getParam('task');
  let { stats } = navigation.getParam('task');

  if (weekendOff) {
    stats = stats.filter(
      stat => !weekendDays.includes(new Date(stat.date).getDay())
    );
  }

  const data = {
    labels: stats.map(stat => weekDays[new Date(stat.date).getDay()]),
    datasets: [
      {
        data: stats.map(stat => 100 * (stat.dailyProgress / stat.dailyGoal)),
        color: (opacity = 1) => interpolateColor(theme.primary, opacity),
      },
    ],
  };

  return (
    <View style={styles(theme).container}>
      <Header />
      <Text style={styles(theme).title}>{title}</Text>
      <LineChart
        data={data}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel={'%'}
        withOuterLines={false}
        withInnerLines={false}
        chartConfig={{
          backgroundGradientFrom: theme.base01,
          backgroundGradientTo: theme.base01,
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => interpolateColor(theme.text01, opacity),
        }}
        style={{
          marginVertical: 25,
          borderRadius: 15,
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      />
    </View>
  );
};

const styles = theme => {
  return {
    container: {
      flex: 1,
      backgroundColor: theme.base01,
    },
    title: {
      color: theme.text01,
      fontSize: 40,
      fontWeight: '600',
      textAlign: 'center',
      paddingTop: 25,
    },
  };
};

export default StatsScreen;
