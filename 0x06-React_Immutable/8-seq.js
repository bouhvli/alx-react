import { Seq } from 'immutable';

export default function printBestStudents(grades) {
  const seq = Seq(grades);
  const student = seq.filter((val) => val.score > 70);
  const students = student.toJS();
  const format = (name) => name.charAt(0).toUpperCase() + name.slice(1);
  Object.keys(students).map((key) => {
    std[key].firstName = format(std[key].firstName);
    std[key].lastName = format(std[key].lastName);
    return std[key];
  });
  console.log(std);
}
