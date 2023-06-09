  // const printDayNamesCurrentMonth = () => {
  //     const daysOfWeek = [
  //       "Sunday", "Monday", "Tuesday", "Wednesday",
  //       "Thursday", "Friday", "Saturday"
  //     ];

  //     let daysofMonth = []
    
  //     const currentDate = new Date();
  //     const month = currentDate.getMonth();
  //     const year = currentDate.getFullYear();
    
  //     const firstDayOfMonth = new Date(year, month, 1);
  //     const daysInMonth = new Date(year, month + 1, 0).getDate();
    
  //     console.log(`Day names in ${currentDate.toLocaleString('default', { month: 'long' })} ${year}:`);
    
  //     for (let day = 0; day < daysInMonth; day++) {
  //       const currentDay = new Date(year, month, day + 1);
  //       const dayName = daysOfWeek[currentDay.getDay()];
  //       daysofMonth.push(dayName);
  //     }
  //     console.log(daysofMonth);   
  //   }
    
  //   export default printDayNamesCurrentMonth