import { useRef, useState } from 'react';
import { useLocation } from 'react-router';

/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import { Row, Col } from '../../components/Grid';
import * as T from '../../components/Typography';
import * as S from './style';
import Button from '../../components/Button';
import Result from '../../components/Result';

import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-regex';

import test from '../../helpers/test';

const exampleContent =
  "\n\"abcde\" -> 0              no characters repeats more than once  \n\"aabbcde\" -> 2            'a' and 'b'  \n\"aabBcde\" -> 2            'a' occurs twice and 'b' twice (b and B)  \n\"indivisibility\" -> 1     'i' occurs six times  \n\"Indivisibilities\" -> 2   'i' occurs seven times and 's' occurs twice  \n\"aA11\" -> 2               'a' and '1'  \n\"ABBA\" -> 2               'A' and 'B' each occur twice\n";

const CountingDuplicates = () => {
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
      <Row>
        <Col w={[4, 12, 12]}>
          <T.H2 strong color="white">
            Count the number of Duplicates
          </T.H2>
          <S.InlineP color="white">
            Write a function that will return the count of{' '}
            <S.InlineP keyboard> distinct case-insensitive </S.InlineP>{' '}
            alphabetic characters and numeric digits that occur more than once
            in the input string. The input string can be assumed to contain only
            alphabets (both uppercase and lowercase) and numeric digits.
          </S.InlineP>
        </Col>
      </Row>
      <Row mt="5" mb="3">
        <Col w={[4, 12, 12]}>
          <T.H3 strong color="green">
            Examples:{' '}
          </T.H3>
        </Col>
      </Row>
      <Row jc="center">
        <Col w={[4, 12, 12]} jc="center">
          <Editor
            className="editor-box"
            value={exampleContent}
            onValueChange={() => {}}
            highlight={(jsSample) => highlight(jsSample, languages.regex)}
            padding={10}
          />
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
            to start solve this kata go to
            <S.InlineP keyboard> src/functions/counting-duplicates</S.InlineP>
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

export default CountingDuplicates;
