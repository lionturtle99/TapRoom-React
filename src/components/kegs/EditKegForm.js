import React from 'react';
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import kegImg from './../../img/happy-keg.png';
import ReusableForm from './../Utilities/ReusableForm';

function EditKegForm(props) {

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.handleEditingKeg({name: event.target.name.value, description: event.target.description.value, pints: event.target.pints.value, imageURL: kegImg, id: v4()})
    event.target.reset();
  }

  return (
    <React.Fragment>
      <h6 className="text-center my-2">Edit Keg</h6>
      <ReusableForm 
        formSubmissionHandler={handleEditKegFormSubmission} 
        name={props.name} 
        description={props.description} 
        pints={props.pints} />
    </React.Fragment>
  );
}

EditKegForm.propType = {
  onEditKeg: PropTypes.func
}

export default EditKegForm;