import React from 'react';
import PropTypes from 'prop-types';

import * as S from './style';

const General = ({ children, ...props }) => {
  return (
    <>
      <header>header</header>
      <S.Main>{children}</S.Main>
      <footer>footer</footer>
    </>
  );
};

General.propTypes = {
  children: PropTypes.node.isRequired,
};

export default General;
