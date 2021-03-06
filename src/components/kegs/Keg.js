import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";


function Keg(props) {
  return (
    <ListGroup.Item className="mb-3 border shadow-sm">
      <Row>
        <Col md={4}>
          <img src={props.imageURL} alt={props.name} className="w-100" style={{maxWidth: '350px'}} />
        </Col>
        <Col md={8} id={props.id} className="pt-2 pb-2">
          <h4 className="fw-normal border-bottom pb-1">{props.name} <span className="fs-6"> ({props.pints} pints left)</span></h4>
          {props.description}

          <div className="mt-3 me-3 text-end">
            <Button onClick={ () => props.onClickingSellPint(props.id) } variant="dark" size="sm" className="me-3 px-4 rounded-pill shadow-sm">sell pint</Button>
            <Button onClick={ () => props.onEditKeg(props.id) } variant="dark" size="sm" className="px-4 rounded-pill shadow-sm">update</Button>
          </div>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

Keg.propType = {
  imageURlL: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  pints: PropTypes.number,
  onClickingSellPint: PropTypes.func,
  onEditKeg: PropTypes.func
}

export default Keg;