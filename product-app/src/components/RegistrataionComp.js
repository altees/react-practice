import axios from 'axios';
import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import HeaderComp from './HeaderComp';

const BASE_URL = "http://localhost:8585/admin";

class  RegistrationComp extends Component{

  constructor(props){
    super(props)
    this.state={
      productDiscription: '',productCategory: '',productPrice:0.0
    }
  }


  handleInputChange=(event)=>{
    let keyName = event.target.name;
    let keyValue = event.target.value;
    this.setState({[keyName]:keyValue});
  }


  insertProduct=(event)=>{
     console.log(this.state)
     axios.post(BASE_URL+"/product",this.state).then(response=>{
       console.log(response)
     }).catch(error=>{
       console.log(error);
     })

  }



  render(){
    return <div>
    <Form inline>
    <FormGroup>
      <Label for="exampleEmail" hidden>Product Description</Label>
      <Input type="text" name="productDiscription" id="description" placeholder="Discription"  onChange ={this.handleInputChange} />
    </FormGroup>
    <FormGroup>
      <Label for="examplePassword" hidden>Price</Label>
      <Input type="number" step="0.01" name="productPrice" id="productPrice" placeholder="Price" onChange={this.handleInputChange}/>
    </FormGroup>
  
    <FormGroup>
      <Label for="examplePassword" hidden>Product Category</Label>
      <Input type="text" name="productCategory" id="category" placeholder="Category" onChange={this.handleInputChange}/>
    </FormGroup><br></br>
   
    <Button   color='success' onClick={this.insertProduct} >Save</Button>
        </Form>
  </div>
}
}
export default RegistrationComp;