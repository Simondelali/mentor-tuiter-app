'use strict';

function exam (code, name, credits, score, date){
    this.code = code;
    this.name = name;
    this.credits = credits;
    this.score = score;
    this.date = date;
}


//var exam1 = new exam('CE12', 'Ceng', 3 , 80 , '12-08-22');
//console.log(exam1.code)

function examList(){
    this.list = [];

    this.add = (e) => {
        this.list.push(e);
    }

    this.find = (code) => {
        for (const c of this.list)
        if (c.code === code)
        return c;
        return undefined;
    }

}
const exams1 = new exam('CE12', 'Computational Engineering', 3 , 78 , '12-08-22');
const exams2 = new exam('FC12', 'French', 2 , 86 , '22-08-22');
const exams3 = new exam('ME12', 'Thermodynamics', 3 , 80 , '03-08-22');

const exams = new examList();
exams.add(exams1);
exams.add(exams2);
exams.add(exams3);

console.log("FIND COURSE");
console.log(exams.find('ME12'));