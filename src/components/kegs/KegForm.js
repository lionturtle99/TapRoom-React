import React from 'react';
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import kegImg from './../../img/happy-keg.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function KegForm(props) {
  
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, description: event.target.description.value, pints: event.target.pints.value, imageURL: kegImg, id: v4()})
    event.target.reset();
  }

  return (
    <React.Fragment>
    <Form onSubmit={handleNewKegFormSubmission}>
    <h6 className="text-center my-2">Add new Keg</h6>
      <Form.Control
        type='text'
        name='name'
        placeholder='Name'
        className="mb-3 shadow-sm"
        required="required" />
      <Form.Control
        as='textarea'
        rows={4}
        name='description'
        placeholder='Description'
        className="mb-3 shadow-sm" 
        required="required"/>
      <Form.Control
        type='number'
        min='1'
        max='15000'
        name='pints'
        placeholder='Pints'
        className="mb-3 shadow-sm" 
        required="required"/>
      <Button variant="dark" size="sm" type="submit" className="px-4 rounded-pill shadow-sm">Submit</Button>
    </Form>
  </React.Fragment>
  );
}

KegForm.propType = {
  onNewKegCreation: PropTypes.func
}

export default KegForm;