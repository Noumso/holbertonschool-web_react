interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: 'Bruce',
    lastName: 'Wayne',
    age: 30,
    location: 'Gotham City'
  };
  
  const student2: Student = {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 22,
    location: 'New York City'
  };
  
  const studentsList: Student[] = [student1, student2];
  
  const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
  
  const table: HTMLTableElement = document.createElement("table");
  const thead: HTMLTableSectionElement = document.createElement("thead");
  const tbody: HTMLTableSectionElement = document.createElement("tbody");
  
  // Header row
  const rowHead: HTMLTableRowElement = document.createElement("tr");
  const cell1Head: HTMLTableCellElement = document.createElement("th");
  const cell2Head: HTMLTableCellElement = document.createElement("th");
  
  cell1Head.textContent = "First Name";
  cell2Head.textContent = "Location";
  
  rowHead.appendChild(cell1Head);
  rowHead.appendChild(cell2Head);
  thead.appendChild(rowHead);
  table.appendChild(thead);
  
  // Data rows
  studentsList.forEach((student) => {
    const row: HTMLTableRowElement = document.createElement("tr");
  
    const cell1: HTMLTableCellElement = document.createElement("td");
    const cell2: HTMLTableCellElement = document.createElement("td");
  
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  
    row.appendChild(cell1);
    row.appendChild(cell2);
    tbody.appendChild(row);
  });
  
  table.appendChild(tbody);
  body.appendChild(table);
  