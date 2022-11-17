'use strict';

function exam (code, name, credits, score, date){
    this.code = code;
    this.name = name;
    this.credits = credits;
    this.score = score;
    this.date = date;
}

//function examList()
var exam1 = new exam('CE12', 'Ceng', 3 , 80 , 12);
console.log(exam1.code)