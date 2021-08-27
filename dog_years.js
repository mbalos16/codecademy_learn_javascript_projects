/*
Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?
Here’s how you convert your age from “human years” to “dog years”:
    The first two years of a dog’s life count as 10.5 dog years each.
    Each year following equates to 4 dog years.
Before you start doing the math in your head, let a computer take care of it! With your knowledge of math operators and variables, use JavaScript to convert your human age into dog years.
If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.
*/

//Convert a human age into a dog age//

//Declare a variable and set it with the value of a human age:
const myAge = 29;

//Declare a variable and set it with the value 2 for the first years:
let earlyYears = 2; 

//Declare a changebel variable and set it with the value 2:
earlyYears *= 10.5;

//Declare a variable and set it with the value -2 for the later years:
let laterYears = myAge - 2;

//Calculate the number of dog years acounted for the later years:
laterYears *= 4;

/*
console.log(earlyYears);
console.log(laterYears);
*/

//We are calculating the age in dog age
let myAgeInDogYears = earlyYears + laterYears;

//We are declaring a new variable and we set it with the value of our name.
let myName = `Maria`.toLowerCase()

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)