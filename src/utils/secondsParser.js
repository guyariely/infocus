const secondsParser = seconds => {
  let minutes = 0;
  while (seconds > 0) {
    seconds -= 60;
    minutes++;
  }

  let hours = 0;
  while (minutes >= 60) {
    minutes -= 60;
    hours++;
  }

  return { hours, minutes };
};

export default secondsParser;
