// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.css';

const Footer = () =>
  (
    <footer className={styles.footer}>
      <Link to="/Copyright"> Decarium &copy; 2017</Link>
    </footer>
  );

export default Footer;
