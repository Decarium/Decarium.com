import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import ReactGA from 'react-ga';


const GAMatch = ({ component: Comp, passProps, ...props }) =>
  <Route
    {...props} render={(matchedProps) => {
      ReactGA.set({ page: window.location.pathname });
      ReactGA.pageview(window.location.pathname);
      return <Comp {...passProps} {...matchedProps} />;
    }}
  />;

export default GAMatch;

GAMatch.propTypes = {
  component: PropTypes.func,
  passProps: PropTypes.object,
};
