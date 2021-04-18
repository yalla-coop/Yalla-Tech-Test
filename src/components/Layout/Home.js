import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ children, ...props }) => {
  return (
    <>
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
};

Home.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Home;
