import { useState } from "react";

import CardForm from "./components/CardForm";
import CardDisplayFront from "./components/CardDisplayFront";
import CardDisplayBack from "./components/CardDisplayBack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import { Formik } from "formik";
import * as Yup from "yup";

function App() {
  const [creditCardInfo, setCreditCardInfo] = useState({
    name: "John Doe",
    numbers: "0000 0000 0000 0000",
    month: "00",
    year: "00",
    cvc: "000",
  });

  const initialValues = {
    name: "John Doe",
    numbers: "0000 0000 0000 0000",
    month: "00",
    year: "00",
    cvc: "000",
  };
  const onSubmit = (values) => {
    setCreditCardInfo(values);
    console.log(values);
  };

  const nameRegex = /^[a-z ,.'-]+$/i;
  const numbersRegex = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;
  const monthRegex = /^(0[1-9]|1[0-2])$/;
  const yearRegex = /^(0[1-9]|1[0-2])$/; // TODO Corriger
  const cvcRegex = /^[0-9]{3}$/;

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Ce champ est requis")
      .min(3, "entrer un nom valide")
      .matches(nameRegex, "entrer un nom valide")
      .trim(),
    numbers: Yup.string()
      .required("Ce champ est requis")
      .matches(numbersRegex, "Enter un numéro de carte valide"),
    // TODO ?? comment faire pour que le format se fasse seul
    month: Yup.string()
      .required("Ce champ est requis")
      .matches(
        monthRegex,
        "Veuillez entrer un mois valide, sous cette forme MM"
      ),
    year: Yup.string()
      .required("Ce champ est requis")
      .matches(
        yearRegex,
        "Veuillez entrer une année valide, sous cette forme YY"
      ),
    cvc: Yup.string()
      .required("Ce champ est requis")
      .matches(cvcRegex, "Veuillez entrer un CVC valide"),
  });
  return (
    <>
      <Container fluid className="bg-info .bg-gradient p-4">
        <Row>
          <Col>
            <Stack gap={2} className="mx-auto align-middle">
              <CardDisplayFront
                numbers={creditCardInfo.numbers}
                name={creditCardInfo.name}
                month={creditCardInfo.month}
                year={creditCardInfo.year}
              />
              <CardDisplayBack cvc={creditCardInfo.cvc} />
            </Stack>
          </Col>
          <Col>
            <Row>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validateOnChange
                validationSchema={validationSchema}>
                <CardForm />
              </Formik>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
