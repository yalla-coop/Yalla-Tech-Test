import { useRef, useState } from 'react';

import { Row, Col } from '../../components/Grid';
import * as T from '../../components/Typography';

import * as S from './style';
import Button from '../../components/Button';
import Result from '../../components/Result';
import { useLocation } from 'react-router';

import test from '../../helpers/test';

const LargestFive = () => {
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
            Largest 5 digit number in a series{' '}
          </T.H1>
        </Col>
      </Row>
      <Row>
        <Col w={[4, 12, 12]}>
          <S.InlineP color="white">.In the following 6 digit number:</S.InlineP>
        </Col>
        <Col w={[4, 12, 12]} mt="5">
          <S.ExampleDiv>
            <T.P color="white" strong>
              283910
            </T.P>
          </S.ExampleDiv>
        </Col>
        <Col w={[4, 12, 12]} mt="4">
          <T.P color="white">
            <S.InlineP color="white" keyboard>
              91
            </S.InlineP>{' '}
            is the greatest sequence of 2 consecutive digits.
          </T.P>
        </Col>
      </Row>
      <Row>
        <Col w={[4, 12, 12]} mt="5">
          <T.P color="white">In the following 10 digit number:</T.P>
        </Col>{' '}
        <Col w={[4, 12, 12]} mt="5">
          <S.ExampleDiv>
            <T.P color="white" strong>
              1234567890
            </T.P>
          </S.ExampleDiv>
        </Col>
        <Col w={[4, 12, 12]} mt="4">
          <T.P color="white">
            <S.InlineP color="white" keyboard>
              67890
            </S.InlineP>{' '}
            is the greatest sequence of 2 consecutive digits.
          </T.P>
        </Col>
      </Row>
      <Row mt="6">
        <Col w={[4, 12, 12]}>
          <T.P color="white">
            Complete the solution so that it returns the greatest sequence of
            five consecutive digits found within the number given. The number
            will be passed in as a string of only digits. It should return a
            five digit integer. The number passed may be as large as 1000
            digits.
          </T.P>
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
            <S.InlineP keyboard> src/functions/largest-five</S.InlineP>
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

export default LargestFive;
