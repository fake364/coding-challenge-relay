const formatToBrowserDateFormat = dateString => {
  const correctDate = dateString.split("/");
  return `${correctDate[2]}-${correctDate[1]}-${correctDate[0]}`;
};

export default formatToBrowserDateFormat;
