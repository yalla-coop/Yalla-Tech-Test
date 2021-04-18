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

const exampleContent = `\nstrarr = [\"tree\", \"foling\", \"trashy\", \"blue\", \"abcdef\", \"uvwxyz\"], k = 2\n\nConcatenate the consecutive strings of strarr by 2, we get:\n\ntreefoling   (length 10)  concatenation of strarr[0] and strarr[1]\nfolingtrashy (\"      12)  concatenation of strarr[1] and strarr[2]\ntrashyblue   (\"      10)  concatenation of strarr[2] and strarr[3]\nblueabcdef   (\"      10)  concatenation of strarr[3] and strarr[4]\nabcdefuvwxyz (\"      12)  concatenation of strarr[4] and strarr[5]\n\nTwo strings are the longest: \"folingtrashy\" and \"abcdefuvwxyz\".\nThe first that came is \"folingtrashy\" so \nlongest_consec(strarr, 2) should return \"folingtrashy\".\n\nIn the same way:\nlongest_consec([\"zone\", \"abigail\", \"theta\", \"form\", \"libe\", \"zas\", \"theta\", \"abigail\"], 2) --> \"abigailtheta\"\n`;

const ConsecutiveStrings = () => {
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
          <S.InlineP color="white">
            You are given an array(list) <S.InlineP keyboard>strarr</S.InlineP>{' '}
            of strings and an integer <S.InlineP keyboard>k</S.InlineP>. Your
            task is to return the{' '}
            <S.InlineP color="green" strong mark>
              first
            </S.InlineP>{' '}
            longest string consisting of k{' '}
            <S.InlineP strong mark>
              consecutive
            </S.InlineP>{' '}
            strings taken in the array.
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
        <Col w={[4, 12, 12]}>
          <T.P ml="2" mt="5" color="white">
            n being the length of the string array, if n = 0 or k &gt; n or k
            &lt;= 0 return "".
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
            consecutive strings : follow one after another without an
            interruption
          </T.P>
        </Col>{' '}
        <Col w={[4, 12, 12]}>
          <T.P color="white">
            to start solve this kata go to src/functions/consecutive-strings
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

export default ConsecutiveStrings;
