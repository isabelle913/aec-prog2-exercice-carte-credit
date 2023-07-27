import React from "react";
import Form from "react-bootstrap/Form";
import { useField } from "formik";

const Input = ({ label, type, id, ...rest }) => {
  const [field, meta] = useField(id);
  const isError = meta.touched && meta.error;

  return (
    <Form.Group>
      {label && <Form.Label htmlFor={id}>{label}</Form.Label>}
      <Form.Control isInvalid={isError} type={type} {...field} {...rest} />
      {isError && ( // rendering conditionnel si à gauche est thruthy, retourne ce qui est à droite
        <Form.Control.Feedback type="invalid">
          {meta.error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default Input;
