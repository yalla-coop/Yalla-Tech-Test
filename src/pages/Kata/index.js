import { useParams } from 'react-router';
import K1 from './WillYouMakeIt';
import k2 from './ConsecutiveStrings';
import k3 from './CountingDuplicates';
import k4 from './LargestFive';
import k5 from './PascalToSnake';

const Kata = () => {
  const { id } = useParams();

  const Katas = {
    1: K1,
    2: k2,
    3: k3,
    4: k4,
    5: k5,
  };

  const RenderKata = Katas[id];
  return (
    <div>
      <RenderKata />
    </div>
  );
};

export default Kata;
