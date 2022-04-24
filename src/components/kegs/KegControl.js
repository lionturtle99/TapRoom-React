import React from "react";
import Container from 'react-bootstrap/Container';
import EditKegForm from './EditKegForm';
import KegList from './KegList';

class KegController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainKegList: [],
      totalPintsSold: 0,
      editing: false,
      selectedKeg: null
    };
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({
      mainKegList: newMainKegList,
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
    });
  }

  onEditKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({
      selectedKeg: selectedKeg,
      editing: true
    });
  }

  handleEditingKeg = (kegToEdit) => {
    const editedMainKegList = this.state.mainKegList
    .filter(keg => keg.id !== this.state.selectedKeg.id)
    .concat(kegToEdit);
  this.setState({
      mainKegList: editedMainKegList,
      editing: false,
      selectedKeg: null
    });
  }

  render(){
    let visibleScreen = null;
    this.state.mainKegList.forEach((keg) => {
      if (keg.pints <= 0) {
        this.handleDeletingKeg(keg.id);
      }
    });

    if (this.state.editing) {
      visibleScreen = <EditKegForm 
        handleEditingKeg={this.handleEditingKeg}
        name={this.state.selectedKeg.name}
        description={this.state.selectedKeg.description}
        pints={this.state.selectedKeg.pints} />
    } 
    else {
      visibleScreen = <KegList  
        mainKegList={this.state.mainKegList} 
        handleSellingPints={this.handleSellingPints} 
        totalPintsSold={this.state.totalPintsSold} 
        handleAddingNewKegToList={this.handleAddingNewKegToList}
        onEditKeg={this.onEditKeg} />
    }

    return (
      <Container className="pt-2">
        {visibleScreen}
      </Container>
    )
  }
}



export default KegController;
