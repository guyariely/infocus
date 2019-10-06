import React, { useContext } from 'react';
import { View } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';
import Title from './Title';
import DailyGoal from './DailyGoal';
import WeekendOff from './WeekendOff';
import Description from './Description';

const Form = props => {
  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).container}>
      <Title title={props.title} setTitle={props.setTitle} />
      <DailyGoal
        dailyGoal={props.dailyGoal}
        setDailyGoal={props.setDailyGoal}
      />
      <WeekendOff
        weekendOff={props.weekendOff}
        setWeekendOff={props.setWeekendOff}
      />
      <Description
        description={props.description}
        setDescription={props.setDescription}
      />
    </View>
  );
};

const styles = theme => {
  return {
    container: {
      flex: 1,
      paddingTop: 20,
    },
  };
};

export default Form;
