import { useState } from "react";

import CardForm from "./components/CardForm";
import CardDisplayFront from "./components/CardDisplayFront";
import CardDisplayBack from "./components/CardDisplayBack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import { Formik } from "formik";

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
                validateOnChange>
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
