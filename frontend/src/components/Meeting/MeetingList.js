import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { MEET_GET } from '../../api';


const MeetingList = () => {
  
    const [data, setData] = React.useState([]);
  
  
    async function go() {
      const token = window.localStorage.getItem('token');
      const { url, options } = MEET_GET(token);
      const response = await fetch(url, options);
      const data = await response.json();
      setData(data);
  
    }
  
    go();
  
    return (
      <div style={{ height: 350, width: '100%' }}>
        <DataGrid
          columns={[
            { field: 'id' , headerName: 'ID'},
            { field: 'name', headerName: 'Nome' , width: 200 },
            { field: 'description', headerName: 'Descrição' , width: 200 },
            { field: 'started_at' , headerName: 'Início', width: 200 },
            { field: 'ended_at' , headerName: 'Fim', width: 200 },
  
          ]}
          rows={data}
        />
      </div>
    )
  }
  
  export default MeetingList
  
  
