import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Keg from './Keg';
import KegForm from './KegForm.js';

class KegController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainKegList: [],
      totalPintsSold: 0
    };
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({
      mainKegList: newMainKegList,
      totalPintsSold: this.state.totalPintsSold
    });
  }

  handleSellingPints = (id) => {
    const editedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    editedKeg.pints -= 1;
    const editedMainKegList = this.state.mainKegList.filter(keg => keg.id !== editedKeg.id).concat(editedKeg);
    const newTotal = this.state.totalPintsSold + 1;
    this.setState({
        mainKegList: editedMainKegList,
        totalPintsSold: newTotal
      });
  }

  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id);
    this.setState({
      mainKegList: newMainKegList,
      totalPintsSold: this.state.totalPintsSold
    });
  }

  render(){

    this.state.mainKegList.forEach((keg) => {
      if (keg.pints <= 0) {
        this.handleDeletingKeg(keg.id);
      }
    })

    return (
      <Container className="pt-2">
        <Row className="border rounded shadow-sm">
          <Col md={8} className="p-3 fw-light">
            <ListGroup>
              {this.state.mainKegList.map((keg) => 
                <Keg name={keg.name}
                  description={keg.description}
                  pints={keg.pints}
                  imageURL={keg.imageURL}
                  id={keg.id}
                  key={keg.id}
                  onClickingSellPint = {this.handleSellingPints}
                />
              )}
            </ListGroup>
          </Col>
          <Col md={4} className="py-3 px-4 fw-light">
          <Row className="text-center border rounded shadow-sm mb-3 p-3">
              <Col>
                <h6>Total Pints Sold</h6>
                <p className="fw-bold fs-6 text-decoration-underline">{this.state.totalPintsSold}</p>
              </Col>
            </Row>
            <Row className="text-center border rounded shadow-sm pb-5 pt-3 px-3">
              <Col>
                <KegForm onNewKegCreation={this.handleAddingNewKegToList} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}



export default KegController;