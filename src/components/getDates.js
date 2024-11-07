export default function getNextTwentyFourHours({ days }) {
  // this array should contain 24elements
  if (!days) {
    console.log("getDates() days: ", days);
    return;
  }

  const nextTwentyFourHours = [];
  const date = new Date();
  let dayCount = 0;
  let hourNow = date.getHours();
  let now = days[0].hours.find((hour) => hourNow == hour);
  // let now =
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
  // console.log(nextTwentyFourHours);
  return nextTwentyFourHours;
  // let now =  data.days[0].hours.filter(time => time === date.getHours())
  // array starts at now
}
