import React from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const InputForm = (props) => {
  return (
<>
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
        <h2>Leaderboard</h2>
      </Col>
    </Row>
    <Row className="mt-4">
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Form>
          <FormGroup>
            <Label for="player">Player</Label>
            <Input name="player" placeholder="Ex: Player 1"></Input>
          </FormGroup>
          <FormGroup>
            <Label for="score">Score</Label>
            <Input name="score" placeholder="Ex: 2345"></Input>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Col>
    </Row>
  </> 
  );
};
export default InputForm;