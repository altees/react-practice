import axios from 'axios';
import React from 'react';
import { Pagination } from 'reactstrap';
import PaginationComp from './PaginationComp';
import ProductTable from './ProductDetailsTableComp';


const BASE_URL = "http://localhost:8585/admin";

class DataTableComp extends React.Component{

    constructor(props){
        super(props)
        this.state={
            details:[]
        }
    }


    componentDidMount(){
        axios.get(BASE_URL+"/products").
        then(response=>{
            this.setState({details:response.data})
        }).then(err=>{
            console.log(err);
        });

        axios.post(BASE_URL+"/products/page").
        then(response=>{
            this.setState({details:response.data})
        }).then(err=>{
            console.log(err);
        });
    }


    render(){
        const users=this.state.details;
      
        return <div>
            <br/>
               <ProductTable  value={users}/>
               <PaginationComp/>
             </div>
    }


}

export default DataTableComp;