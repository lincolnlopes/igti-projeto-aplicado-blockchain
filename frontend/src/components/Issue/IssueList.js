import React from 'react'
//import BootstrapTable from 'react-bootstrap-table-next';
import { DataGrid } from '@material-ui/data-grid';
import { ISSUE_GET } from '../../api';



//const rows = [];


const IssueList = () => {

  const [data, setData] = React.useState([]);


  async function go() {
    const token = window.localStorage.getItem('token');
    const { url, options } = ISSUE_GET(token);
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
          { field: 'summary', headerName: 'Título' , width: 200 },
          { field: 'description', headerName: 'Descrição' , width: 200 },
          { field: 'meeting_id' , headerName: 'Reunião ID', width: 200 },

        ]}
        rows={data}
      />
    </div>
  )
}

export default IssueList

