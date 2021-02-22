const shortFullPair = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
};

const formatDate = (dateString) => {
  const inUTCformat = new Date(Date.parse(dateString))
    .toUTCString()
    .slice(0, 16);

  var toReturn = "";
  toReturn += shortFullPair[inUTCformat.slice(0, 3).toLowerCase()];
  toReturn += ", ";
  toReturn += inUTCformat.slice(8, 11);
  toReturn += " ";
  toReturn +=
    Number(inUTCformat.slice(5, 7)) > 9
      ? inUTCformat.slice(5, 7)
      : inUTCformat.slice(6, 7);

  toReturn += " ";
  toReturn += inUTCformat.slice(12, 16);
  return toReturn;
};

export default formatDate;
