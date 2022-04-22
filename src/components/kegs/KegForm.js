import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import kegImg from './../../img/happy-keg.png';
import ReusableForm from './../Utilities/ReusableForm';

function KegForm(props) {
  
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, description: event.target.description.value, pints: event.target.pints.value, imageURL: kegImg, id: v4()})
    event.target.reset();
  }

  return (
    <React.Fragment>
      <h6 className="text-center my-2">Add new Keg</h6>
      <ReusableForm formSubmissionHandler={handleNewKegFormSubmission} />
    </React.Fragment>
  );
}

KegForm.propType = {
  onNewKegCreation: PropTypes.func
}

export default KegForm;