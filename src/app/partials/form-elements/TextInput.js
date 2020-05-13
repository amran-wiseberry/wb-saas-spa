
import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';

const TextInput = ({
    name,
  width,
  type,
  placeholder,
//   meta: { touched, error }
}) => {
  return (
    // <Form.Field error={touched && !!error} width={width}>
    //     <input {...input} placeholder={placeholder} type={type} />
    //     {touched && error &&<Label basic color='red'>{error}</Label>}
    // </Form.Field>
    <Form.Group  as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control name={name}  type={type} placeholder={placeholder} />
    </Col>
  </Form.Group>
  )

};

export default TextInput;