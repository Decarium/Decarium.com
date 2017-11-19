import React from 'react';
import ReactGA from 'react-ga';

import { Helmet } from 'react-helmet';


import styles from './NotFound.css';

import Navigation from '../../Components/Navigation';

const NotFound = () =>
   (
     <div className={styles.wrapper}>
       <Helmet>
         <title>Oops...</title>
       </Helmet>
       <Navigation />


       <main className={styles.container}>
         <div className={styles.content}>
           <h1>Oops....</h1>
           <p>Looks like you have stumbled somewhere that does not exist.</p>
           <p>Try clicking on the logo to find your way back :).</p>
           <p>If you find your way here again, and think we messed up, open up
           an issue on the <strong><ReactGA.OutboundLink
             eventLabel="404 - Github"
             to="https://github.com/decarium/decarium.com/issues"
           >repository</ReactGA.OutboundLink></strong> for this website.</p>
         </div>
       </main>
     </div>
  )
;

export default NotFound;
