'use strict';


{
  const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
  const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

  const filter = (allStudents, failedStudents) => {
    const successStudents = [];

    for (const student of allStudents) {
      if (!(failedStudents.includes(student))) {
        successStudents.push(student);
      }
    }

    return successStudents;
  }

  console.log(filter(allStudents, failedStudents));
}
