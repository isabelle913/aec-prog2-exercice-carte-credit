import React from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

const CardDisplayFront = ({ numbers, name, month, year }) => {
  return (
    <div>
      <Container className="bg-light rounded">
        <Stack>
          <div>{numbers}</div>
          <div>{name}</div>
          <div>
            {month}/{year}
          </div>
        </Stack>
      </Container>
    </div>
  );
};

export default CardDisplayFront;
