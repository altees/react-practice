import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';







const RegistrationComp = (props) => {
  return (
    <Form inline>
      <FormGroup>
        <Label for="exampleEmail" hidden>Product Description</Label>
        <Input type="text" name="desc" id="description" placeholder="Discription"  onChange={handleDesc}/>
      </FormGroup>
      <br></br>
    
      <FormGroup>
        <Label for="examplePassword" hidden>Product Category</Label>
        <Input type="text" name="category" id="category" placeholder="Category"/>
      </FormGroup><br></br>
     
      <Button>Submit</Button>
    </Form>
  );
}

export default RegistrationComp;