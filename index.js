let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript: [
      {
          course: 'INFO 1080',
          grades: [89, 34, 67]
      },
      {
          course: 'INFO 1081',
          grades: [89, 34, 67]
      }
  ]
};

let salty = {
  fname: "salty",
  lname: "smith",
  age: 18,
  height: 6,
  transcript: [
      {
          course: 'INFO 1081',
          grades: [109, 89, 79]
      }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript: [
      {
          course: 'INFO 1080',
          grades: [89, 34, 67]
      }
  ]
};

const students = [bob, salty, paul];


function getAverageGrade(student, course) {
  let transcript = student.transcript;
  for (let entry of transcript) {
      if (entry.course === course) {
          let grades = entry.grades;
          let sum = grades.reduce((a, b) => a + b, 0);
          return sum / grades.length;
      }
  }
  return -1;
}


function getAssignmentMark(student, course, num) {
  let transcript = student.transcript;
  for (let entry of transcript) {
      if (entry.course === course) {
          let grades = entry.grades;
          if (num >= 0 && num < grades.length) {
              return grades[num];
          }
          return -1;
      }
  }
  return -1;
}


function averageAssessment(students, courseName, assignment) {
  let sum = 0;
  let count = 0;
  for (let student of students) {
      let mark = getAssignmentMark(student, courseName, assignment);
      if (mark !== -1) {
          sum += mark;
          count++;
      }
  }
  return count > 0 ? sum / count : -1;
}


console.log("Average grade for Bob in INFO 1080:", getAverageGrade(bob, 'INFO 1080'));
console.log("Assignment 1 grade for Bob in INFO 1080:", getAssignmentMark(bob, 'INFO 1080', 1)); 
console.log("Average mark for all students in INFO 1080, Assignment 0:", averageAssessment(students, 'INFO 1080', 0));


function createPerson(name, height, weight) {
  return { name: name, height: height, weight: weight };
}

function calcBMI(weight, height) {
  return weight / (height * height);
}

function avgBMI(people) {
  let sum = 0;
  for (let person of people) {
      sum += calcBMI(person.weight, person.height);
  }
  return sum / people.length;
}


let people = [
  createPerson("Sally", 1.7, 60),
  createPerson("Ben", 1.8, 81),
  createPerson("Shelly", 1.6, 50)
];

console.log("Average BMI of people:", avgBMI(people)); 