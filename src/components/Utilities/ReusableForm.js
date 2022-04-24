import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
    <Form onSubmit={props.formSubmissionHandler}>
      <Form.Control
        type='text'
        name='name'
        defaultValue={props.name}
        placeholder="Name"
        className="mb-3 shadow-sm"
        required="required" />
      <Form.Control
        as='textarea'
        rows={4}
        name='description'
        defaultValue={props.description}
        placeholder="Description"
        className="mb-3 shadow-sm" 
        required="required"/>
      <Form.Control
        type='number'
        min='1'
        max='15000'
        name='pints'
        defaultValue={props.pints}
        placeholder="pints"
        className="mb-3 shadow-sm" 
        required="required"/>
      <Button variant="dark" size="sm" type="submit" className="px-4 rounded-pill shadow-sm">Submit</Button>
    </Form>
  </React.Fragment>
  );
}

ReusableForm.propType = {
  name: PropTypes.string,
  description: PropTypes.string,
  pints: PropTypes.number,
  formSubmissionHandler: PropTypes.func
}

export default ReusableForm;