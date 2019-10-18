import React, { useEffect, useState, createContext } from 'react';
import { getWeekendDays, saveWeekendDays } from '../utils/weekendPersist';

export const WeekendContext = createContext();

const WeekendContextProvider = props => {
  const [weekendDays, setWeekendDays] = useState([0, 6]);

  useEffect(() => {
    getWeekendDays()
      .then(weekendDays => setWeekendDays(weekendDays))
      .catch(error => console.log(error));
  }, []);

  const updateWeekendDays = weekendDays => {
    setWeekendDays(weekendDays);
    saveWeekendDays(weekendDays)
      .then()
      .catch(error => console.log(error));
  };

  const isWeekend = () => {
    return weekendDays.includes(new Date().getDay());
  };

  return (
    <WeekendContext.Provider
      value={{ weekendDays, updateWeekendDays, isWeekend }}
    >
      {props.children}
    </WeekendContext.Provider>
  );
};

export default WeekendContextProvider;
