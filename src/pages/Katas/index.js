import { Col, Row } from '../../components/Grid';
import KataCard from '../../components/KataCard';
import katasInfo from './katasData';

const Katas = () => (
  <Row>
    {katasInfo.map((k) => (
      <Col w={[4, 12, 4]} mt="6">
        <KataCard key={k.id} {...k} />
      </Col>
    ))}
  </Row>
);

export default Katas;
