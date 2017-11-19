import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Helmet } from 'react-helmet';

// This files styles - need to import before anything else to get the css first.
import styles from './index.css';

// Screens
import Home from './Screens/Home';
import Copyright from './Screens/Copyright';
import Footer from './Components/Footer';
import NotFound from './Screens/NotFound';

import GAMatch from './Components/GAMatch';

const App = () =>
    (
      <BrowserRouter>
        <div className={styles.container}>
          <div className={styles.content}>
            <Helmet>
              <title>Decarium</title>
            </Helmet>
            <Switch>
              <GAMatch exact path="/" component={Home} />
              <GAMatch path="/Copyright" component={Copyright} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );

export default App;
