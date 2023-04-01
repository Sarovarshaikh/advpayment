import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

const Cardday = () => {
  return (
    <div>
        <Container>
            <Row>
            <Col md={4} sm={4}>
            <div style={{ marginTop: "20" }}>
              <p style={{ visibility: "hidden" }}>sarovar Shakh</p>
              <p>Per day Price</p>
              <p>Total Seving</p>
              <h5>Total Amountr</h5>
            </div>
          </Col>
          <Col md={8} sm={8}>
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

        </Container>
    </div>
  )
}

export default Cardday