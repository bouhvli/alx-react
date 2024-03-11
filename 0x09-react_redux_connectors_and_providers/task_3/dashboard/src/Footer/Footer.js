import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import PropTypes from "prop-types";
import { connect } from "react-redux";

export function Footer() {
  return (
    <footer className='App-footer'>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user && <a href='#'>Contact us</a>}
    </footer>
  );
}
Footer.defaultProps = {
  user: null,
};

Footer.propTypes = {
  User: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    User: state.get("user"),
  };
};

export default connect(mapStateToProps, null)(Footer);