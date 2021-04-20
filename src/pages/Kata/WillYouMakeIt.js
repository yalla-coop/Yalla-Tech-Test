import { useRef, useState } from 'react';

import { Row, Col } from '../../components/Grid';
import * as T from '../../components/Typography';

import * as S from './style';
import Button from '../../components/Button';
import Result from '../../components/Result';
import { useLocation } from 'react-router';

import test from '../../helpers/test';

const WillYouMakeIt = () => {
  const ResultRef = useRef();
  const [results, setResults] = useState([]);
  const { pathname } = useLocation();
  const kataId = pathname.split('/kata/')[1];

  const handleClick = () => {
    ResultRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
    setResults(test(kataId));
  };
  return (
    <>
      <Row jc="center">
        <Col w={[4, 4, 4]}>
          <T.H1 strong color="red" mb="5">
            Will you make it?{' '}
          </T.H1>
        </Col>
      </Row>
      <Row>
        <Col w={[4, 12, 12]}>
          <S.InlineP color="white">
            You were camping with your friends far away from home, but when it's
            time to go back, you realize that your fuel is running out and the
            nearest pump is <S.InlineP keyboard>50</S.InlineP> miles away! You
            know that on average, your car runs on about{' '}
            <S.InlineP keyboard>25</S.InlineP> miles per gallon. There are{' '}
            <S.InlineP keyboard>2</S.InlineP> gallons left. Considering these
            factors, write a function that tells you if it is possible to get to
            the pump or not. Function should return{' '}
            <S.InlineP keyboard>true</S.InlineP> if it is possible and{' '}
            <S.InlineP keyboard>false</S.InlineP> if not. The input values are
            always positive.
          </S.InlineP>
        </Col>
      </Row>
      <Row mt="5" mb="2">
        <Col w={[4, 12, 12]}>
          <T.H3 strong color="white">
            Notes:{' '}
          </T.H3>
        </Col>
      </Row>
      <Row mb="3">
        <Col w={[4, 12, 12]}>
          <T.P color="white">
            to start solve this kata go to{' '}
            <S.InlineP keyboard> src/functions/will-you-make-It</S.InlineP>
          </T.P>
        </Col>
      </Row>
      <Row mt="5">
        <Col w={[4, 4, 4]}>
          <Button
            label="Test now"
            onClick={handleClick}
            backgroundColor="pink"
            size="large"
          />
        </Col>
      </Row>
      <Row mt="7">
        <Col w={[4, 12, 12]}>
          {results.length > 0 && <Result results={results} />}
        </Col>
      </Row>
      <div ref={ResultRef} />
    </>
  );
};

export default WillYouMakeIt;
