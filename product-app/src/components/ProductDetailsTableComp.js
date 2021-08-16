import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';

const ProductTable = (props) => {

    const[alt,setAlt]=useState([]);
  

    var updateRecord=(obj,event)=>{
        setAlt(["khan","altees",123])
        console.log(alt);
            
    }



    let count = 0;
    return (
        <Table hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Id</th>
                    <th>Product Description</th>
                    <th>Product Category</th>
                    <th>Price</th>
                    <th>CreatedAt</th>
                    <th>Update</th>
                    <th>Delete</th>
                    

                </tr>
            </thead>
            <tbody>
                {props.value.map(val =>
                    <tr>
                        <th scope="row">{++count}</th>
                        <td>{val.id}</td>
                        <td>{val.productDiscription}</td>
                        <td>{val.productCategory}</td>
                        <td>{val.productPrice+" "+"\u20B9"}</td>
                        <td>{moment(val.createdAt).calendar()}</td>
                        <td> <Button outline color="warning" onClick={(e)=>updateRecord(val.id,e)}>Update</Button></td>
                        <td> <Button outline color="danger">Delete</Button></td>
                    </tr>
                )}

            </tbody>
        </Table>
        
    );
}

export default ProductTable;