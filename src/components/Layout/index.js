import React from 'react';
import PropTypes from 'prop-types';

import Home from './Home';
import General from './General/index';

const Layout = ({ layout, ...props }) => {
  switch (layout) {
    case 'general':
      return <General {...props} />;
    case 'home':
    default:
      return <Home {...props} />;
  }
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
