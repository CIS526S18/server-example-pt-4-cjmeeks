/**@module students 
 * 
*/

const fs = require('fs');
const escapeHtml = require('../helpers/escapeHtml');

module.exports = {
    getStudents: getStudents,
    addStudent: addStudent
};

var students = JSON.parse(fs.readFileSync("students.json", {encoding: 'utf-8'}));

/**@function getStudents
 * 
 * @return {Array} array of student objects
 */
function getStudents(){
    return JSON.parse(JSON.stringify(students));
}

/**@function addStudent
 * @param {Object} student - to add
 * @param {function} callback - callback function
 */
function addStudent(student, callback){
    // TODO: validate the student
    var sanitizedStudent = {
        name: escapeHtml(student.name),
        eid: escapeHtml(student.eid),
        description: escapeHtml(student.description)
    };
    students.push(sanitizedStudent);
    fs.writeFile('students.json', {encoding: 'utf-8'}, JSON.stringify(students));
    callback(false, JSON.parse(JSON.stringify(sanitizedStudent)));
}

// /**@function removeStudent
//  * @param {Object} student - to add
//  * @param {function} callback - callback function
//  */
// function addStudent(student, callback){
//     // TODO: validate the student
//     students.push(JSON.parse(JSON.stringify(student)));
//     fs.writeFile('students.json', {encoding: 'utf-8'}, JSON.stringify(students));
//     callback(false, student);
// }
// TODO: provide list of students

// TODO: add a new student to list