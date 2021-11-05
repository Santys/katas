function lastDayIsFriday(initialYear, endYear) {
  if(!endYear) endYear = initialYear
  let counter = 0;
  let year = initialYear;
  while(year <= endYear){
    for (let month = 0; month < 12; month++) {
        const date = new Date(year,month + 1,0);
        if(date.getDay() == 5) counter++;
    }
    year++;
  }
  return counter;
}
