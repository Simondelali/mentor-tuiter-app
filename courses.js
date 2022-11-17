'use strict';

const courseName = `Data Structures and Algorithm, Programming and problem solving,
MATLAB, Communication systems, Principles of Accounting, Digital Systems, 
Discrete Structures, Algebra, Calculus`

//console.log(courseName)

//Join multi-line string
const modif = courseName.replace(/\n/g, '');

//create courses array
const courses = modif.split(',');
//console.log(courses);

//clean whitespace around commas
for (let i = 0; i < courses.length; i++){
    courses[i] = courses[i].trim();
}

// create acronyms
const acronyms = [];
for (const c of courses){
    const words = c.split('');
    let acronym = '';
    for (let w of words){
        acronym += w[0].toUpperCase();
    }
    acronyms.push(acronym);
}
//prints acronyms + course name


