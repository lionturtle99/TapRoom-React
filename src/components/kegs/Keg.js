import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import kegImg from './../../img/happy-keg.png';


function Keg(props) {
  return (
    <ListGroup.Item className="mb-3 border shadow-sm">
      <Row>
        <Col md={4}>
          <img src={kegImg} alt={props.flavor} className="w-100" style={{maxWidth: '350px'}} />
        </Col>
        <Col md={8} className="pt-2 pb-2 position-relative">
          <h4 className="fw-normal border-bottom pb-1">{props.flavor} <span className="fw-light">|</span> <span className="fs-6"> with ({props.pints} left)</span></h4>
          {props.description}

          <div className="mt-3 me-3 text-end position-absolute bottom-0 end-0">
            <Button variant="dark" size="sm" className="me-3 px-4 rounded-pill shadow-sm">sell pint</Button>
            <Button variant="dark" size="sm" className="px-4 rounded-pill shadow-sm">update</Button>
          </div>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export default Keg;