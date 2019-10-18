import moment from 'moment';

const isWeekend = () => {
  return moment().weekday() === 6 || moment().weekday() === 5;
};

export default isWeekend;
