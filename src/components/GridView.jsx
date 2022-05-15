import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useEffect, useState } from 'react';
import Score from '../database/score.json'

function GridView() {
    const [rowData, setRowData] = useState([]);
    const [columnDefs, setColumnDefs] = useState([
        { field: 'name' },
        {field: 'score', editable: true}
    ])
    useEffect(() => {
        setRowData(Score)
        console.log(rowData)
    },[])
    return (
        <><div>GridView Component</div>
            <div className='ag-theme-alpine' style={{ height: 400, width: 600 }}><AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
            /></div>
        </>
    )
}

export default GridView;