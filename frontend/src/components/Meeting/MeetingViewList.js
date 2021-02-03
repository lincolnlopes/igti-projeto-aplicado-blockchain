import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap';
import { MEET_GET } from '../../api';


const MeetingViewList = () => {
  
    const [data, setData] = React.useState([]);

    useEffect(async () => {
      const token = window.localStorage.getItem('token');
      const { url, options } = MEET_GET(token);
      const response = await fetch(url, options);
      const data = await response.json();
      return () => {
        setData(data);
      }
    }, [data])
  /*
    async function go() {
      const token = window.localStorage.getItem('token');
      const { url, options } = MEET_GET(token);
      const response = await fetch(url, options);
      const data = await response.json();
      setData(data);
  
    }*/
  
    //go();
  
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th colSpan="2">Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>

          {data.map(d =>  <tr>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td colSpan="2">{d.description}</td>
                            <td>{d.started_at}</td>
                          </tr>)}
        </tbody>
      </Table>
    )
  }
  
  export default MeetingViewList
  
  
