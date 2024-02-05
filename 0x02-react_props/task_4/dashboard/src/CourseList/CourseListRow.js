import React, { Fragment } from 'react'
import propTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCall, textSecondCall }) => {
  let tr = undefined;
  if (isHeader === true) {
    if (textSecondCall === null) {
      tr = <th colSpan='2'>{textFirstCall}</th>
    } else {
      tr = (
        <Fragment>
          <th>{textFirstCall}</th>
          <th>{textSecondCall}</th>
        </Fragment>
      );
    }
  }
  if (isHeader === false) {
    tr = (
      <Fragment>
        <td>{textFirstCall}</td>
        <td>{textFirstCall}</td>
      </Fragment>
    )
  }
  return (
    <tr>
      {tr}
    </tr>
  )
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCall: null,
};
CourseListRow.proptype = {
  isHeader: propTypes.bool,
  textFirstCall: propTypes.string.isRequired,
  textSecondCall: propTypes.string,
};
export default CourseListRow;