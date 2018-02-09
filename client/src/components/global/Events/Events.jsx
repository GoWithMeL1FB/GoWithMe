import React from 'react';
import axios from 'axios';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: {}
    };
  }

  // handleSave() {
  //   console.log("you clicked a button! )^.^(")
    //save event to user favorites
    // let event = {};
    // event.id = this.props.id;
    // event.name = this.props.name;
    // event.address = this.props.address
    // console.log(this.state.favorites);
    // axios.post('http://localhost:3030/api/user/updateUser', payload)
    // .then(
    //   (res) => {
    //     console.log('user favorite submitted', res)
    //     this.props.history.push('/Home');
    //   }
    // )
    // .catch(
    //   (err) => {
    //     console.log('user edit favorite failed', err);
    //   }
    // )
  // }

  render() {
    const photo = `${this.props.prefix}36x36${this.props.suffix}`
    
    return (
      <div className="container" >
        <img  src={photo}/>
        <p >{this.props.name}</p>
        <p >{this.props.address}</p>
        <p >Description: {this.props.price} {this.props.category} </p>
      </div>
    )
  }
}

export default Events;
