import { Chance } from "chance";
import fs from 'fs';
let chance = new Chance();

let student = {
    "name": chance.first(),
    "surname": chance.last(),
    "rate": Math.floor(Math.random() * 100 + 1)
}

let string = JSON.stringify(student);

fs.writeFileSync('student.txt', string,
    function (err) {
        if (err) throw err;
        console.log("Saved");
     })

let input = fs.readFileSync("student.txt", function (err, data) {
    if (err) throw err;
    console.log(data);
});

let student_obj = JSON.parse(input);
student_obj.gender = 'Male';
fs.appendFile('student.txt', '\n' + JSON.stringify(student_obj),
    function (error) {
        if (error) throw error;
        console.log("Saved");
     })

console.log(student_obj);
