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
  "\n javascript\n//  returns test_controller\ntoUnderscore('TestController');\n\n// returns movies_and_books\ntoUnderscore('MoviesAndBooks');\n\n// returns app7_test\ntoUnderscore('App7Test');\n\n// returns \"1\"\ntoUnderscore(1);\n```\n";

const PascalToSnake = () => {
  const ResultRef = useRef();
  const [results, setResults] = useState([]);
  const { pathname } = useLocation();
  const kataId = pathname.split('/kata/')[1];

  const handleClick = () => {
    setResults(() => []);
    ResultRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
    console.log(test(kataId));
    setResults(() => test(kataId));
  };

  return (
    <>
      <Row>
        <Col w={[4, 12, 12]}>
          <T.H2 strong color="white">
            Convert PascalCase string into snake_case
          </T.H2>
          <S.InlineP color="white">
            Complete the function/method so that it takes CamelCase string and
            returns the string in snake_case notation. Lowercase characters can
            be numbers. If method gets number, it should return string.
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

export default PascalToSnake;
