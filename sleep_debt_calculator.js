/*
Sleep Debt Calculator

In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator. 
The program will determine the actual and ideal hours of sleep for each night of the last week.
Finally, it will calculate, in hours, how far you are from your weekly sleep goal.

*/

//I declare a function that takes one parameter called day and returns the conventional sleep hour per night, which is 8:
const getSleepHours = day => {
    if (day === 'Monday') {
      return 8;
    } else if (day === 'Tuesday'){
      return 8;
    } else if (day === 'Wednesday'){
      return 8;
    }
    else if (day === 'Tursday'){
      return 8;
    }
    else if (day === 'Friday'){
      return 8;
    }
    else if (day === 'Saturday'){
      return 8;
    }
    else if (day === 'Sunday'){
      return 8;
    }
  };
  
  // This is a function that add al the conventional hours per day and returns the conventional number of sleep hours per week:
  const getActualSleepHours = () => getSleepHours("Monday") + getSleepHours("Tuesday") + getSleepHours("Wednesday") + getSleepHours("Tursday") + getSleepHours("Friday") + getSleepHours("Saturday") + getSleepHours("Sunday"); 
  
  // This is a function that rerurns the ideal number of sleep hours per week:
  const getIdealSleepHours = () => {
    let idealHours = 6;
    return idealHours * 7;
  }
  
  /*
  Testing if the functions work:
  console.log(getActualSleepHours());
  console.log(getIdealSleepHours());
  */
  
  //We calculate the sleep debt 
  const calculateSleepDebt =() =>{
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
  
    if(actualSleepHours === idealSleepHours) {
      console.log("You got the perfect amount of sleep");
    } else if (actualSleepHours > idealSleepHours) {
      console.log("You got " + (idealSleepHours - actualSleepHours) + " more sleep than needed");
    } else if (actualSleepHours < idealSleepHours){
      console.log("You should got some rest. You got " + (idealSleepHours - actualSleepHours) + " less sleep than needed");
    }
  }
  
  calculateSleepDebt();
  