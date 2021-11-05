function getTotalSundays (yearInit, yearEnd) {
  if(yearEnd === undefined) yearEnd = yearInit
    let counter = 0;
    let year = yearInit;
    while(year <= yearEnd){
        for (let month = 0; month < 12; month++) {
            const date = new Date(year,month,1,5);
            if(date.getDay() === 0) counter++;
        }
        year++;
    }
    return counter;
}
