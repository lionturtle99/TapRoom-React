import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Keg from './Keg';
import KegForm from './NewKegForm.js';

function KegList(props){
  return (
    <Container className="pt-2">
      <Row className="border rounded shadow-sm">
        <Col md={8} className="p-3 fw-light">
          <ListGroup>
            {props.mainKegList.map((keg) => 
              <Keg name={keg.name}
                description={keg.description}
                pints={keg.pints}
                imageURL={keg.imageURL}
                id={keg.id}
                key={keg.id}
                onClickingSellPint = {props.handleSellingPints}
                onEditKeg={props.onEditKeg}
              />
            )}
          </ListGroup>
        </Col>
        <Col md={4} className="py-3 px-4 fw-light">
        <Row className="text-center border rounded shadow-sm mb-3 p-3">
            <Col>
              <h6>Total Pints Sold</h6>
              <p className="fw-bold fs-6 text-decoration-underline">{props.totalPintsSold}</p>
            </Col>
          </Row>
          <Row className="text-center border rounded shadow-sm pb-5 pt-3 px-3">
            <Col>
              <KegForm onNewKegCreation={props.handleAddingNewKegToList} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default KegList;