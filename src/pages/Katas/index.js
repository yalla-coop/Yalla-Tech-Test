import { Col, Row } from '../../components/Grid';
import KataCard from '../../components/KataCard';
const katasInfo = [
  {
    id: 1,
    name: 'Consecutive strings',
    level: 6,
    isDone: false,
  },
  {
    id: 2,
    name: 'Will you make it ?',
    level: 8,
    isDone: false,
  },
];
const Katas = () => (
  <Row>
    {katasInfo.map((k) => (
      <Col w={[4, 12, 4]}>
        <KataCard {...k} />
      </Col>
    ))}
  </Row>
);

export default Katas;
