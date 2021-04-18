import { useParams } from 'react-router';
import K1 from './ConsecutiveStrings';
import k2 from './WillYouMakeIt';

const Kata = () => {
  const { id } = useParams();

  const Katas = {
    1: K1,
    2: k2,
  };

  const RenderKata = Katas[id];
  return (
    <div>
      <RenderKata />
    </div>
  );
};

export default Kata;
