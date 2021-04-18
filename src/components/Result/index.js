import * as S from './style';
import * as T from '../Typography';
import Icon from '../Icon';

const Passed = ({ expected }) => (
  <li>
    <Icon
      icon="tickRound"
      color="blue"
      width="22px"
      height="22px"
      style={{ marginTop: 5 }}
    />
    <S.InlineP color="blue">
      passed, case : <S.Span color="green">{expected}</S.Span>
    </S.InlineP>
  </li>
);

const NotPassed = ({ expected, got }) => (
  <li>
    <Icon
      icon="no"
      color="pink"
      width="22px"
      height="22px"
      style={{ marginTop: 5 }}
    />
    <S.InlineP color="pink">
      <S.Span color="black">Not Passed expected :</S.Span> {expected}
      <S.Span color="black">, instead got :</S.Span>
      {got}
    </S.InlineP>
  </li>
);

const Result = ({ results }) => {
  return (
    <S.Container>
      <S.Title>
        <T.H2 strong>Result</T.H2>
      </S.Title>
      <S.Ul>
        {results.map(({ passed, expected, got }) =>
          passed ? (
            <Passed expected={JSON.stringify(expected)} />
          ) : (
            <NotPassed
              expected={JSON.stringify(expected)}
              got={JSON.stringify(got)}
            />
          )
        )}
      </S.Ul>
    </S.Container>
  );
};

export default Result;
