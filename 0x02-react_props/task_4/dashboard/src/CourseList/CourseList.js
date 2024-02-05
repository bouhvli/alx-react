import React from 'react'
import CourseListRow from './CourseListRow';
import './CourseList.css';

export default function CourseList() {
  return (
    <table>
      <thead>
        <CourseListRow textFirstCall='Available courses' isHeader={true} />
        <CourseListRow textFirstCall='Course name'
          textSecondCall='Credit' isHeader={true} />
      </thead>
      <tbody>
        <CourseListRow
          textFirstCall='ES6' textSecondCall='60'
        isHeader={false}/>
        <CourseListRow
          textFirstCall='Webpack' textSecondCall='20'
        isHeader={false}/>
        <CourseListRow
          textFirstCall='React' textSecondCall='40'
        isHeader={false}/>
      </tbody>
    </table>
  )
}
