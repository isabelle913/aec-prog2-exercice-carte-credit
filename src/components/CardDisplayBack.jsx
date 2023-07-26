import React from "react";
import Container from "react-bootstrap/Container";

const CardDisplayBack = ({ cvc }) => {
  return (
    <div>
      <Container className="bg-light rounded">
        <div>{cvc}</div>
      </Container>
    </div>
  );
};

export default CardDisplayBack;
