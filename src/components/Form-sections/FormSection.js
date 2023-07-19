import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class FormSection extends Component {
  render() {
    const { controlId, label, name, type, placeholder, value, onChange, isInvalid, feedback } = this.props;
    return (
      <Form.Group className="mb-1 w-100" controlId={controlId}>
        <Form.Label>{label}:</Form.Label>
        <Form.Control
          value={value}
          required
          onChange={onChange}
          name={name}
          type={type}
          placeholder={placeholder}
          isInvalid={isInvalid}
        />
        <Form.Control.Feedback type="invalid">{feedback}</Form.Control.Feedback>
      </Form.Group>
    );
  }
}

export default FormSection;
