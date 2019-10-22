const formatXP = XP => {
  if (XP < 999) return XP;
  if (XP < 999999) return Math.floor(XP / 1000) + 'K';
  if (XP < 999999999) return Math.floor(XP / 1000000) + 'M';
  return Math.floor(XP / 1000000000) + 'B';
};

export default formatXP;
