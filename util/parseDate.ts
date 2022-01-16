export const parseDate = (date: number, absolute?: boolean) => {
  const msPerDay = 86400000;
  const msPerHour = 3600000;
  const msPerMinute = 60000;
  // reddit uses seconds
  const epoch = date * 1000;
  const delta = Date.now() - epoch;

  if (absolute) {
    return new Date(epoch).toDateString();
  }
  if (delta >= msPerDay) {
    return `${Math.floor(delta / msPerDay)} days ago`;
  } else if (delta >= msPerHour) {
    return `${Math.floor(delta / msPerHour)} hours ago`;
  } else if (delta >= msPerMinute) {
    return `${Math.floor(delta / msPerMinute)} minutes ago`;
  } else {
    return "now";
  }
};
