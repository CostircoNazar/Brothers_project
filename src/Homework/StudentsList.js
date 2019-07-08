let _ = require('lodash');

/*
* Using arrays of courses, literature and students create studentsList array with selected data in it..
* Each student object have a coursesList property that contain array of courses he visiting during semester.
* Use that list to find course data that correspond to course name. Result list should contain object's that:
* 1. Have name of the student
* 2. Have surname of the student
* 3. Have list of the courses that student is visiting. In that list each object should have:
*     3.1. Name of the course
*     3.2. List of literature that will help him to prepare for exam. Only if course have exam!
*     3.3. (Bonus task). If course have exam and exam date is in 2 weeks (from current date) than student should
*          have a property 'reminder' with date of exam as value
*     3.4. (Super bonus task) Try to check if course have exams with out using 'exams' flag. Just remove that property
*          from courses objects
*
* Use example data to build
* Use lodash for array iterating
* Use moment.js (install if required) to compare current date and exam date
*/
// Example:
const courses = [
    {
        name: 'philosophy',
        exams: true,
        examDate: '12-05-2019',
    },
    {
        name: 'physics',
        exams: true,
        examDate: '18-05-2019',
    },
    {
        name: 'economics',
        exams: false,
    },
    {
        name: 'history',
        exams: false,
    },
    {
        name: 'mathematics',
        exams: true,
        examDate: '21-06-2019'
    }
];

const literature = [
    {
        name: 'philosophy',
        books: [
            'Philosophy of the human life',
            'Creation of mind',
            'Ideas development'
        ],
    },
    {
        name: 'physics',
        books: [
            'Einstein physics',
            'Physics of liquid bodies',
        ]
    },
    {
        name: 'mathematics',
        books: [
            'Magic numbers',
            'Mathematics for students',
            'High Level of Math'
        ]
    }
];

const students = [
    {
        name: 'Michale',
        surname: 'Smith',
        coursesList: [
            'philosophy',
            'physics',
            'economics',
        ]
    }
];

// Expected output:
const studentsList = [
    {
        name: 'Michale',
        surname: 'Smith',
        courses: [
            {
                name: 'philosophy',
                literature: [
                    'Philosophy of the human life',
                    'Creation of mind',
                    'Ideas development'
                ],
                reminder: '12-05-2019'
            },
            {
                name: 'physics',
                literature: [
                    'Einstein physics',
                    'Physics of liquid bodies',
                ],
            },
            {
                name: 'economics',
            },
        ]
    }
];


const compareCourses = (studentData, courses, literature) => {
    const { coursesList } = studentData;

    const getStudentCourses = (courses, coursesList) => {
        _.map(coursesList, (courseName) => _.find(courses, ({name}) => name === courseName));
    };

    const getCoursesLiterature = (literature, courseName) => {
        _.find(literature, ({name}) => name == courseName)
    }

    const studentCoursesData = getStudentCourses(courses, coursesList);

  // [{
  //   name: 'philosophy',
  //     exams: true,
  //   examDate: '12-05-2019',
  // },
  // {
  //   name: 'physics',
  //     exams: true,
  //   examDate: '18-05-2019',
  // },
  // {
  //   name: 'economics',
  //     exams: false,
  // }]

    const literatureList = [];
    _.map(studentCoursesData, (courseValue) => {
        const { exams, name } = courseValue;
        if (exams == true) {
           literatureList.push( getCoursesLiterature(literature, name));
        }
    })
};
//
// name: 'philosophy',
//     literature: [
//     'Philosophy of the human life',
//     'Creation of mind',
//     'Ideas development'
// ],
//     reminder: '12-05-2019'




// using student property "courseList"

let myStudentsList = new Object();

myStudentsList.name = 'Nazar';
myStudentsList.surname = 'Costirco';
myStudentsList.courses = [];


function findData(students, courses, literature) {
    let studentsArray = [];
    _.map(students, (value, index)=> {
        const {coursesList} = value;
        _.map(coursesList, (info)=> {
            studentsArray.push(info);
        });

        _.map(courses, (value2, index2)=> {
            _.map(studentsArray, (data)=>{
                if (courses[index2].name == data) {
                    _.map(literature, (literatureValue, literatureIndex)=> {
                       return myStudentsList.courses.push(literature[literatureIndex].name);
                    })
                    //return myStudentsList.toString();
                }

            })
    })
    })
};



let object = findData(students, courses, literature);
//console.log(object);


let coursesPlusLiterature = [];
    _.map(courses, (coursesValue)=> {
    _.map(literature, (literatureValue)=> {
        _.map(students, (studentsValue)=> {
            const {coursesList} = studentsValue;
            _.map(coursesList, (courcseListVaule) => {
                if (literatureValue.name ==  coursesValue.name && literatureValue.name == courcseListVaule) {
                    coursesPlusLiterature.push(courcseListVaule);
                }
            })

        })

    })

});
console.log(coursesPlusLiterature);


// let ob = [];
//
// for (let i = 0; i < literature.length; i ++) {
//     ob.push( literature[i]);
// }
// //console.log(ob);
//
// let myObj = new Object(),
//     str = 'mystring',
//     rand = Math.random(),
//     obj = new Object();
//
//
// myObj.type =  'dot syntax';
// myObj.name = 'Nazar';
//  myObj.course = ob;
//   //   _.map(ob, (value)=>value);
// //_.forIn(literature, (index)=> {
// //     const {books} = index;
// //    return index;
// //});
// myObj['date created'] = 'String with space';
// myObj[str] = 'String value';
// myObj[rand] = 'Random number';
// myObj[obj] = 'obj';
// myObj[''] = 'Even an empty string';
//
// console.log(myObj);
//
//
// function Foo() {
//     this.a = 1;
//     this.b = 2;
// }
//
// Foo.prototype.c = 3;
//
// _.forIn(new Foo, function(value, key) {
//     console.log(value);
// });