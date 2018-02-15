
const studentIndex = require('../view/students/index');
const studentModel = require('../model/students.js');

/**@function list
 * Lists the students
 */
function list(req, res) {
    var students = studentModel.getStudents();
    var html = studentIndex(students);
    res.setHeader('Content-Type', 'text/html');
    res.end(html);
}

/**@function create
 * creates a new student
 */
function create(res, req) {


    var html = studentIndex(students);
    res.setHeader('Content-Type', 'text/html');
    res.end(html);
}

module.exports = {
    list: list,
    create: create
};