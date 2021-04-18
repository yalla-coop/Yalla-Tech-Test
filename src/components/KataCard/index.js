import * as S from './style';
import * as T from '../../components/Typography';
import Button from '../../components/Button';
import { useHistory } from 'react-router';
import { KATA } from '../../constants/nav-routes';
const KataCard = (props) => {
  const history = useHistory();
  let bgColor;
  if (props.level >= 7) {
    bgColor = 'white';
  } else if (props.level >= 5) {
    bgColor = 'yellow';
  } else {
    bgColor = 'darkBlue';
  }
  return (
    <S.Container bgColor={bgColor}>
      <T.H1 weight="bold">{props.name}</T.H1>
      <T.H4
        color="pink"
        mt="6"
        mb="5"
        weight="bold"
        style={{ textAlign: 'center !important' }}
      >
        Level :{props.level} kyu
      </T.H4>
      <Button
        label="lets start!"
        primary
        size="large"
        onClick={() => history.push(KATA.replace(':id', props.id))}
      />
    </S.Container>
  );
};

export default KataCard;
