import React from 'react'
import propTypes from 'prop-types';

const headerStyle = {
  backgroundColor: '#deb5d545',
};

const normalRowStyle = {
  backgroundColor: '#f5f5f5ab',
}

const CourseListRow = ({ isHeader, textFirstCall, textSecondCall }) => {
  let tr = undefined;
  if (isHeader === true) {
    if (textSecondCall === null) {
      tr = <th style={headerStyle} colSpan='2'>{textFirstCall}</th>
    } else {
      tr = (
        <Fragment>
          <th style={headerStyle}>{textFirstCall}</th>
          <th style={headerStyle}>{textSecondCall}</th>
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
    <tr style={normalRowStyle}>
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
  textSecondCall: propTypes.oneOfType([propTypes.string, propTypes.number]),
};
export default CourseListRow;