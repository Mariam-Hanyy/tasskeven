import React, { useState } from 'react'
import form from 'react-bootstrap/form';
import  InputGroup from 'react-bootstrap/InputGroup';
import { Form, Table } from 'react-bootstrap';
import Container from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Tabel() {

    // const   [search,setsearch]=useState();

    // const mydata   ={
    
    //     "customers": [
    //     {
    //     "id": 1,
    //     "name": "Ahmed Ali"
    //     },
    //     {
    //     "id": 2,
    //     "name": "Aya Elsayed"
    //     },
        
    //     {
    //     "id": 3,
    //     "name": "Mina Adel"
    //     },
    //     {
    //     "id": 4,
    //     "name": "Sarah Reda"
    //     },
    //     {
    //     "id": 5,
    //     "name": "Mohamed Sayed"
    //     }
    //     ],
          
    //     "transactions": [
    //     {
    //     "id": 1,
    //     "customer_id": 1,
    //     "date": "2022-01-01",
    //     "amount": 1000
    //     },
    //     {
    //     "id": 2,
    //     "customer_id": 1,
    //     "date": "2022-01-02",
    //     "amount": 2000
    //     },
    //     {
    //     "id": 3,
    //     "customer_id": 2,
    //     "date": "2022-01-01",
    //     "amount": 550
    //     },
    //     {
    //     "id": 4,
    //     "customer_id": 3,
    //     "date": "2022-01-01",
    //     "amount": 500
    //     },
    //     {
    //     "id": 5,
    //     "customer_id": 2,
    // "date": "2022-01-02",
    // "amount": 1300
    // },
    // {
    // "id": 6,
    // "customer_id": 4,
    // "date": "2022-01-01",
    // "amount": 750
    // },
    // {
    // "id": 7,
    // "customer_id": 3,
    // "date": "2022-01-02",
    // "amount": 1250
    // },
    // {
    // "id": 8,
    // "customer_id": 5,
    // "date": "2022-01-01",
    // "amount": 2500
    // },
    // {
    // "id": 9,
    // "customer_id": 5,
    // "date": "2022-01-02",
    // "amount": 875
    // }
    // ] 
    // }
  return (
    <>
     
     {/* <div className='TabelShow'>
    <Container> 
        <h1 className='text-center mt-4'>Data Customer and transactions</h1>
        <Form >
             <InputGroup className= 'my-3' >
              <form.Control onChange={(e)=>setsearch(e.target.value)}  placeholder= 'search  customers or  transactions' />
             </InputGroup>
             </Form>
    <Table  striped border hover>
        <thead>
            <tr>
               <th>Id</th>
                <th>Name</th>
                <th>transactions</th>
            </tr>
            </thead>
            <tbody>
            {mydata.customers.map((item,i)=>( 

         <tr key={i}>
         <td>{item.id} </td>
         <td> {item.name}</td>

         {mydata.transactions.map((transactions)=>{
            if(customers.id===transactions.customer_id){
                return (   < tbody  key={transactions.id}>
                <tr>
                <td> {transactions.date}</td>
                <td> {transactions.amount}</td>
              </tr>
              </tbody>
                )
            } 
         })
         }
       </tr>
    )
    )}
    </tbody>
    </Table>
    </Container>
    </div> */}
    </>
  )
}
