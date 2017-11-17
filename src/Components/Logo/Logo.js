import React from 'react';
// import ReactGA from 'react-ga';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Logo.css';

const Logo = ({ linked }) => {
  if (linked === true) {
    return (
      <Link to="/">
        <svg className={styles.logo} xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
          <g fill="#323232" fillRule="evenodd" transform="translate(0 -124)">
            <text fontFamily="Ubuntu" fontSize="554.4">
              <tspan x="0" y="517">D</tspan>
            </text>
            <rect width="88" height="88" x="70.4" y="280.5" />
          </g>
        </svg>
      </Link>
    );
  }
  return (
    <svg className={styles.logo} xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
      <g fill="#323232" fillRule="evenodd" transform="translate(0 -124)">
        <text fontFamily="Ubuntu" fontSize="554.4">
          <tspan x="0" y="517">D</tspan>
        </text>
        <rect width="88" height="88" x="70.4" y="280.5" />
      </g>
    </svg>
  );
};

Logo.propTypes = {
  linked: PropTypes.bool,
  onClick: PropTypes.func,
};


export default Logo;

