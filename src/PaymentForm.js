import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import StripeCheckout from 'react-stripe-checkout';

const PaymentForm = () => {
  const [radioValue, setRadioValue] = useState("1");
  const onToken =(token)=>{
    console.log(token);
  }

  const radios = [
    { name: "7 Days", value: "1" },
    { name: "15 Days", value: "2" },
    { name: "30 Days", value: "3" },
  ];
  return (
    <div>
      <Container>
        <Row style={{ marginTop: "20px" }}>
          <Col md={4} sm={4} xs={4}>
            <div>
              <p style={{ visibility: "hidden" }}>sarovar Shakh</p>
              <p>Per day Price</p>
              <p>Total Seving</p>
              <h5>Total Amount</h5>
            </div>
          </Col>
          <Col md={8} sm={8} xs={4}>
            <Row>
              <Col>
                <Card>
                  <Card.Header as="h5" variant="primary">
                    7 Days
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>7000 &#8377;</Card.Text>
                    <Card.Text>700 &#8377;</Card.Text>
                    <Card.Title> 63000 &#8377;</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Header as="h5" variant="primary">
                    15 Days
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>15000 &#8377;</Card.Text>
                    <Card.Text>1250 &#8377;</Card.Text>
                    <Card.Title> 12750 &#8377;</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Header as="h5" variant="primary">
                    30 Days
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>30000 &#8377;</Card.Text>
                    <Card.Text>600 &#8377;</Card.Text>
                    <Card.Title> 240000 &#8377;</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <Row>
              <Col md={4} sm={4}></Col>
              <Col md={4} sm={4} style={{ marginTop: "20px" }}>
                <ButtonGroup>
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      style={{ padding: "15px" }}
                      key={idx}
                      id={`radio-${idx}`}
                      type="radio"
                      variant={idx % 2 ? "outline-primary" : "outline-primary"}
                      name="radio"
                      value={radio.value}
                      checked={radioValue === radio.value}
                      onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col md={4} style={{ margin: "auto" }}>
            <Row>
              <Col md={12} sm={12} style={{ marginTop: "20px" }}>
                
              </Col>
              <Col md={12} sm={12} style={{ margiTop: "20px" }}>
             
                <StripeCheckout
                  token={onToken}
                  name="Adavance Payment"
                  currency="inr"
                  amount="300000"
                  stripeKey="pk_test_51M3Iw0SE23BaaliX0WqvzskNAIFRYUAUqtOOIlEyTlK5PTLa2foLvWQnQOjHTIutE5KrtQ0loa4TfoXFob4iLyxw008taAqpWt"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PaymentForm;
