import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import BsForm from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Input from "./Input";

const CardForm = ({ formData, onChange }) => {
  return (
    <>
      <Container className="bg-light rounded ">
        <BsForm>
          <Stack gap={2}>
            <Input
              type="text"
              value={formData.name}
              id="name"
              onChange={onChange}
              placeholder="Votre nom"
            />
            <Input
              type="text"
              value={formData.numbers}
              id="numbers"
              onChange={onChange}
              placeholder="Numéro de carte de crédit"
            />
            <Input
              type="text"
              value={formData.month}
              id="month"
              onChange={onChange}
              placeholder="date d'expiration"
            />
            <Input
              type="text"
              value={formData.year}
              id="year"
              onChange={onChange}
              placeholder="date d'expiration"
            />
            <Input
              type="text"
              value={formData.cvc}
              id="cvc"
              onChange={onChange}
              placeholder="CVC"
            />
            <Button variant="success">Confirmer</Button>
          </Stack>
        </BsForm>
      </Container>
    </>
  );
};

export default CardForm;
