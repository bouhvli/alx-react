import React from 'react'
import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';
const styles = StyleSheet.create({
  table: {
    width: '95%',
    margin: 'auto',
    marginTop: '200px',
    border: '1px aolid gray',
    borderCollapse: 'collapse',
    height: 'fit-content',
    fontSize: '1.2rem',
    marginBottom: '15em',
  },
  th: {
    borderBottom: '1px solid #ddd',
    width:'80%',
  },
  td: {
    width: '80%',
  },
  tr: {
    ':nth-child(2)': {
      textAlign:'left',
    },
  },
});
const CourseList = ({ listCourses }) => {
  return (
    <table id='CourseList' className={css(styles.table)}>
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
CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};
CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
