import { Button, Card, Col, Row, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { decremented, incremented } from "../store";

const Counter = () => {
  const counter = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incremented());
  };

  const handleDecrement = () => {
    dispatch(decremented());
  };

  const cardStyle = {
    // width: "360px",
    // height: "192px",
    borderRadius: "10px",
    // marginRight: "24px",
    boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
  };

  return (
    <Row style={{ marginTop: "4rem" }}>
      <Col offset={10}>
        <Card title="Counter App" style={cardStyle}>
          <h1>Count {counter}</h1>
          <Space>
            <Button shape="round" type="danger" onClick={handleDecrement} ghost>
              Decrement
            </Button>
            <Button
              shape="round"
              type="primary"
              onClick={handleIncrement}
              ghost
            >
              Increment
            </Button>
          </Space>
        </Card>
      </Col>
    </Row>
  );
};

export default Counter;
