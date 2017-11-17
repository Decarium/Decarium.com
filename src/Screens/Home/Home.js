// @flow

import React from 'react';
import Logo from '../../Components/Logo';

import styles from './Home.css';

const Home = () =>
   (
     <div>
       <div className={styles.container} >
         <div className={styles.logoContainer} >
           <Logo />
         </div>
       </div>
     </div>
    );

export default Home;
