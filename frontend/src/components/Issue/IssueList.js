import React from 'react'
//import BootstrapTable from 'react-bootstrap-table-next';
import { DataGrid } from '@material-ui/data-grid';

const rows = [
  {
    id: 1,
    username: 'defunkt',
    age: 38,
  },
];


const IssueList = () => {

  return (
    <div style={{ height: 350, width: '100%' }}>
      <DataGrid
        columns={[
          { field: 'id' },
          { field: 'username', width: 200 },
          { field: 'age' },
        ]}
        rows={rows}
      />
    </div>
  )
}

export default IssueList

