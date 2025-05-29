interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);


interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);


interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe")); 




interface StudentConstructor {
  firstName: string;
  lastName: string;
}


interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}


class StudentClass implements StudentInterface {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}


const student = new StudentClass({ firstName: "Alice", lastName: "Smith" });
console.log(student.displayName());
console.log(student.workOnHomework());
const root = document.createElement("div");
root.innerHTML = `
  <h2>Test des interfaces</h2>
  <p><strong>Teacher:</strong> ${teacher3.firstName} ${teacher3.lastName}</p>
  <p><strong>Director:</strong> ${director1.firstName} ${director1.lastName}, Reports: ${director1.numberOfReports}</p>
  <p><strong>printTeacher('John', 'Doe'):</strong> ${printTeacher("John", "Doe")}</p>
  <p><strong>Student:</strong> ${student.displayName()} - ${student.workOnHomework()}</p>
`;
document.body.appendChild(root);
