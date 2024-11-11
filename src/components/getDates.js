export default function getNextTwentyFourHours({ days }) {
  if (!days.length) {
    console.log("getDates() days: ", days);
    return;
  }

  const nextTwentyFourHours = [];
  const date = new Date();
  let dayCount = 0;
  let hourNow = date.getHours();

  while (nextTwentyFourHours.length < 24) {
    if (hourNow > 23 && nextTwentyFourHours.length <= 24) {
      hourNow = 0;
      dayCount++;
    }
    const arrayItem = days[dayCount].hours.find(
      (hourObj) => parseInt(hourObj.datetime.slice(0, 2), 10) === hourNow
    );
    if (arrayItem) {
      nextTwentyFourHours.push(arrayItem);
    }
    hourNow++;
  }
  return nextTwentyFourHours;
}
