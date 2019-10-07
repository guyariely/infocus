const createStats = dailyGoal => {
  const today = new Date();
  const stats = [];

  for (let i = 6; i >= 0; i--) {
    const day = new Date(today.getTime());
    day.setDate(today.getDate() - i);
    stats.push({
      date: new Date(day).toLocaleDateString(),
      dailyGoal: dailyGoal,
      dailyProgress: 0,
    });
  }
  return stats;
};

const updateStats = (dailyGoal, stats) => {
  const today = new Date(new Date().toLocaleDateString()).getTime();
  const lastUpdated = new Date(stats[6].date).getTime();

  const timeDiff = Math.abs(today - lastUpdated);
  const dayDiff = Math.min(Math.ceil(timeDiff / 86400000), 7);

  const oldStats = stats.slice(dayDiff, 7);
  const newStats = createStats(dailyGoal).slice(7 - dayDiff, 7);

  return oldStats.concat(newStats);
};

export { createStats, updateStats };
