
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function TabelShow() {
  const [search, setSearch] = useState('');
  
  const mydata = {
    "customers": [
      { "id": 1, "name": "Ahmed Ali" },
      { "id": 2, "name": "Aya Elsayed" },
      { "id": 3, "name": "Mina Adel" },
      { "id": 4, "name": "Sarah Reda" },
      { "id": 5, "name": "Mohamed Sayed" }
    ],
    "transactions": [
      { "id": 1, "customer_id": 1, "date": "2022-01-01", "amount": 1000 },
      { "id": 2, "customer_id": 1, "date": "2022-01-02", "amount": 2000 },
      { "id": 3, "customer_id": 2, "date": "2022-01-01", "amount": 550 },
      { "id": 4, "customer_id": 3, "date": "2022-01-01", "amount": 500 },
      { "id": 5, "customer_id": 2, "date": "2022-01-02", "amount": 1300 },
      { "id": 6, "customer_id": 4, "date": "2022-01-01", "amount": 750 },
      { "id": 7, "customer_id": 3, "date": "2022-01-02", "amount": 1250 },
      { "id": 8, "customer_id": 5, "date": "2022-01-01", "amount": 2500 },
      { "id": 9, "customer_id": 5, "date": "2022-01-02", "amount": 875 }
    ]
  };

  return (
    <>
      <div className='TabelShow'>
        <div className="container">
          <h1 className='text-center mt-4'> Customer Transactions</h1>
          <Form>
            <InputGroup className='my-3'>
              <Form.Control
                type="text"
                placeholder='Search customers or transactions'
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
            </InputGroup>
          </Form>
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer Name</th>
                <th>Transactions</th>
              </tr>
            </thead>
            <tbody>
              {mydata.customers
                .filter((customer) =>
                  search === '' ||
                  customer.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((customer) => (
                  <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>
                      <table className="table">
                        <tbody>
                          {mydata.transactions
                            .filter((transaction) => transaction.customer_id === customer.id)
                            .map((transaction) => (
                              <tr key={transaction.id}>
                                <td>{transaction.date}</td>
                                <td>{transaction.amount}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}


