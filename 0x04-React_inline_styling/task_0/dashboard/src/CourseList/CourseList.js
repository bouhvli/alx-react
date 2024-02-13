import React from 'react'
import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types';
import courseShape from './CourseShape';

const CourseList = ({ listCourses }) => {
  return (
    <table id='CourseList'>
      <thead>
        <CourseListRow textFirstCall='Available courses' isHeader={true} />
        <CourseListRow textFirstCall='Course name'
          textSecondCall='Credit' isHeader={true} />
      </thead>
      <tbody>
        {
          listCourses.length > 0 ? (
            listCourses.map(({ id, name, credit }) => (
              <CourseListRow
                key={id}
                textFirstCall={name}
                textSecondCall={credit}
              />
            ))
          ) : (
            <CourseListRow textFirstCall={'No course available yet'} />
          )
        }
      </tbody>
    </table>
  );
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
