import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import axios from 'axios';

function RequestsPage()
{
    const [requests, setRequests] = useState([]);

    useEffect(()=>{
        axios.get('https://2a17bf54-41fd-4b4d-8327-ca1718f724a7.mock.pstmn.io/requests')
        .then(response => {
            const result = response.data;
            console.log(result);

            if(result.requests)
            {
                const list = [];

                result.requests.forEach(item => {
                    const req_item = {
                        id: item.id,
                        employeeee_name: item.emp_name,
                        status: item.status,
                        reason: item.reason
                    };

                    list.push(req_item);
                });

                setRequests([...requests, ...list]);
            }
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Employee's Name</th>
                    <th scope="col">Reason</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {requests.map((request) => {
                    return (
                        <tr key={request.id}>
                            <td>{request.id}</td>
                            <td>{request.employeeee_name}</td>
                            <td>{request.reason}</td>
                            <td>{request.status}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table >
    );
}

export default RequestsPage;