/*
Codecademy’s annual race is just around the corner! This year, we have a lot of participants. You have been hired to write a program that will register runners for the race and give them instructions on race day.
As a timeline, registration would look like this: registration-timeline
Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:
    Early adults receive a race number at or above 1000.
    All others receive a number below 1000.

Start time:
    Adult registrants run at 9:30 am or 11:00 am.
        Early adults run at 9:30 am.
        Late adults run at 11:00 am.
    Youth registrants run at 12:30 pm (regardless of registration).

But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.
If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.
*/

// formula tu assign a race number randomly:
let raceNumber = Math.floor(Math.random() * 1000);

//a variable that indicates whether a runner registred early or not:
let registrationEarly = false;

//a variable for the runnr's age:
let runnerAge = 16;

//check if the runner is an adult and if registred earlyer :
if (registrationEarly && runnerAge > 18){
  raceNumber += 1000;
}

//check age and registration time to determine race time:
//earlyregistred
if(runnerAge > 18 && registrationEarly){
  console.log(`Hi ${raceNumber}, you will race at 9:30 am.`);
//adults later registred
} else if (runnerAge > 18 && registrationEarly === false){
  console.log(`Hi ${raceNumber}. Late adults run at 11:00 am.`);
} else if (runnerAge < 18){
  console.log(`Hi ${raceNumber}.Youth registrants run at 12:30 pm.`)
} else{
  console.log(`Hi runner. Please check registration desk.`)
}
