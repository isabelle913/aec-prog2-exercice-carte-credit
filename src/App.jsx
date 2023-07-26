import { useState } from "react";

import CardForm from "./components/CardForm";
import CardDisplayFront from "./components/CardDisplayFront";
import CardDisplayBack from "./components/CardDisplayBack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

function App() {
  //const [text, setText] = useState(''valeurInitiale'')

  const [formData, setFormData] = useState({
    name: "John Doe",
    numbers: "0000 0000 0000 0000",
    month: "00",
    year: "00",
    cvc: "000",
  });

  const onChange = (value, id) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <>
      <Container fluid className="bg-info .bg-gradient p-4">
        <Row>
          <Col>
            <Stack gap={2} className="mx-auto align-middle">
              <CardDisplayFront
                numbers={formData.numbers}
                name={formData.name}
                month={formData.month}
                year={formData.year}
              />
              <CardDisplayBack cvc={formData.cvc} />
            </Stack>
          </Col>
          <Col>
            <Row>
              <CardForm formData={formData} onChange={onChange} />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
