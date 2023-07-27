import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import BsForm from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Input from "./Input";
import { Form } from "formik";

const CardForm = () => {
  return (
    <>
      <Container className="bg-light rounded ">
        <Form as={BsForm} noValidate>
          <Stack gap={2}>
            <Input label="Votre nom" type="text" id="name" />
            <Input label="Numéro de carte de crédit" type="text" id="numbers" />
            <Input label="Expiration mois MM" type="text" id="month" />
            <Input label="Expiration année YY" type="text" id="year" />
            <Input label="CVC" type="text" id="cvc" />
            <Button type="submit" variant="success">
              Confirmer
            </Button>
          </Stack>
        </Form>
      </Container>
    </>
  );
};

export default CardForm;
