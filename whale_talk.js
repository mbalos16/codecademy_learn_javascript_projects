/*Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.
There are a few simple rules for translating text to whale language:

1. There are no consonants. Only vowels excluding “y”.
2. The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.
 */

//Write here the text you´ll like to translate into "whalw talk":
let input = "the cat is on the mat";

// We create an array with the vowels, excluding 'y':
const vowels = ['a', 'e', 'i', 'o', 'u'];

// We create an empty array that will colect the result:
const resultArray =[];

//We create a for loop that will iterate through each letter on the input variable text:
for(let i=0; i<input.length; i++){
    //we check if the for loop works: console.log(input[i]);

         /*
      we check if the input is 'e' or 'u' so we can push it to the resultArray
      because whales double this letters:
       */
      if(input[i] === 'e' || input[i] === 'u'){
          resultArray.push(input[i]);
      }

    for(let j=0; j<vowels.length; j++){
      //we check if the for loop for j works: console.log('j is '+ j);
      if(input[i] === vowels[j]){
        resultArray.push(input[i]);
      }
  }
}
console.log(resultArray.join('').toUpperCase());