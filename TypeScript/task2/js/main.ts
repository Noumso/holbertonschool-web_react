// Interfaces et classes (Task 5)

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Type guard et fonction executeWork (Task 6)

function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Type littéral et fonction teachClass (Task 7)

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

// Fonction utilitaire pour afficher dans la page HTML
function appendToBody(text: string) {
  const p = document.createElement('p');
  p.textContent = text;
  document.body.appendChild(p);
}

// Tests avec affichage console + page HTML

const employee1 = createEmployee(200);
console.log(employee1);
appendToBody(`createEmployee(200): ${employee1.constructor.name}`);

const employee2 = createEmployee(1000);
console.log(employee2);
appendToBody(`createEmployee(1000): ${employee2.constructor.name}`);

const employee3 = createEmployee('$500');
console.log(employee3);
appendToBody(`createEmployee('$500'): ${employee3.constructor.name}`);

appendToBody(`executeWork(createEmployee(200)): ${executeWork(employee1)}`);
appendToBody(`executeWork(createEmployee(1000)): ${executeWork(employee2)}`);

appendToBody(`teachClass('Math'): ${teachClass('Math')}`);
appendToBody(`teachClass('History'): ${teachClass('History')}`);
