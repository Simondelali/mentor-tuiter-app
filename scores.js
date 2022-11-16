'use strict';

const score = [69,84,54,73,53,67,87];
const betterScore = [... score];

// sort and delete first 2 lowest 
betterScore.sort();
betterScore.shift();
betterScore.shift();

//compute average
let avg = 0;
for (const s of betterScore){
    avg +=s;
}
avg /= betterScore.length;

//round avg
avg = Math.round(avg);

//append avg to betterScore
betterScore.push(avg);
betterScore.push(avg);
 
console.log(score);
console.log(betterScore);





