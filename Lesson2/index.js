function addParamsToRequest(params){
    let count = 0;
    return function (data) {
        return {
            ...params,
            ...data,
            count: count++,
        }
    }
}

const sendData = addParamsToRequest({'access-token': 'qwerty'});
const result = sendData({'data': '123', 'otherData': '12345'});
console.log(result);
const otherResult = sendData({'data': 'someData', 'otherData': 'someOtherData'});
console.log(otherResult);
const sendOtherData = addParamsToRequest({'access-token': '12345', 'user-id': '123'});
const otherDataResult = sendOtherData({'data': 'someData', 'otherData': 'someOtherData'});
console.log(otherDataResult);


const obj = {
    getData: function () {
        console.log(`Person name is: ${this.name} and age ${this.age}`)
    }
}

obj.getData.call({name: 'John', age: 30});

function showPerson(name, age) {
    const person = {name, age};
    obj.getData.call(person);
}

showPerson('Alex', 25);


const root = {
    name: 'name',
    type: 'folder',
    children: [
        {
            name: 'folder 1',
            type: 'folder',
            children: [
                {
                    name: 'folder 2',
                    type: 'folder',
                    children: [
                        {
                            name: 'file 3',
                            type: 'file',
                            size: 30
                        }
                    ]
                }
            ]
        },
        {
            name: 'file 1',
            type: 'file',
            size: 10
        },
        {
            name: 'file 2',
            type: 'file',
            size: 20
        }
    ]
 };

const files = [];

function findFilesRecursively(obj) {
    if (obj.type === 'file') {
        files.push(obj.name);
    } else {
        obj.children.forEach(child => findFilesRecursively(child))
    }
}

findFilesRecursively(root);
console.log(files);


class Person {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
    introduce() {
        console.log(`Привіт, мене звати ${this.name}, мій номер ${this.phone}.`)
    }
}

class Student extends Person {
    constructor(name, phone, course) {
        super(name, phone);
        this.course = course;
    }
    study() {
        console.log(`Я навчаюся на ${this.course} курсі.`);
    }
}

class Teacher extends Person {
    constructor(name, phone, subject) {
        super(name, phone);
        this.subject = subject;
    }
    teach() {
        console.log(`Я викладаю ${this.subject}.`);
    }
}

const student = new Student('Олександр', '+380111111111', 1);
student.introduce();
student.study();

const teacher = new Teacher('Василь', '+380123456789', 'Математика');
teacher.introduce();
teacher.teach();

function PersonOldStyle(name, phone) {
    this.name = name;
    this.phone = phone;
}
PersonOldStyle.prototype.introduce = function() {
    console.log(`Привіт, мене звати ${this.name}, мій номер ${this.phone}.`)
}

function StudentOldStyle(name, phone, course) {
    PersonOldStyle.call(this, name, phone);
    this.course = course;
}
StudentOldStyle.prototype = Object.create(PersonOldStyle.prototype);
StudentOldStyle.prototype.constructor = StudentOldStyle;
StudentOldStyle.prototype.study = function() {
    console.log(`Я навчаюся на ${this.course} курсі.`);
}

function TeacherOldStyle(name, phone, subject) {
    PersonOldStyle.call(this, name, phone);
    this.subject = subject;
}
TeacherOldStyle.prototype = Object.create(PersonOldStyle.prototype);
TeacherOldStyle.prototype.constructor = TeacherOldStyle;
TeacherOldStyle.prototype.teach = function() {
    console.log(`Я викладаю ${this.subject}.`);
}

const studentOldStyle = new StudentOldStyle('Олександр', '+380111111111', 1);
studentOldStyle.introduce();
studentOldStyle.study();

const teacherOldStyle = new TeacherOldStyle('Василь', '+380123456789', 'Математика');
teacherOldStyle.introduce();
teacherOldStyle.teach();