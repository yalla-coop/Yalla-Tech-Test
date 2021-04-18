import React from 'react';
import PropTypes from 'prop-types';

import * as S from './style';

const General = ({ children, ...props }) => {
  return (
    <>
      <S.Main>{children}</S.Main>
    </>
  );
};

General.propTypes = {
  children: PropTypes.node.isRequired,
};

export default General;
