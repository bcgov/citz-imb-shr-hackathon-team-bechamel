import { useState, useEffect } from 'react'
import '../App.css'
import Button from '@mui/material/Button';
import { DataGrid} from '@mui/x-data-grid';
//import { create } from '@mui/material/styles/createTransitions';



function Dashboard () {
    const [org, setOrg] = useState("");
    const [data, setData] = useState({});
    const [fields, setFields] = useState([])
    const [rowsData, setRowsData] = useState([]);
    
    
    const createColumns = () => {
        let fields = [];
        for(let i = 0; i<org.length; i++) {
            let obj = {}
            obj.field = org[i]
            obj.headerName = org[i]
            obj.width = 130
            fields.push(obj);
    
        }
        //console.log(fields)
        setFields(fields)

        createRows(fields)
        
      }
      const createRows = (fields) => {
        let fieldsLocal = [];
        for(let i = 0; i<data.length; i++) {
            let dataLocal= {}

            for(let j = 0; j< 10; j++) {
                
                if(data[i]) {
                   // console.log(data[i])
               // if( data[i].hasOwnProperty(fields[j])){
                    //console.log(fields)
                    dataLocal[(fields[j].field)] = data[i][fields[j].field]
               // }
            }
              
            }
            dataLocal.id = i;
            //console.log(dataLocal)
            fieldsLocal.push(dataLocal);
        }
        setRowsData(fieldsLocal)
      }
    async function setAPIData() {
      const data = await fetch("http://localhost:3000/api/data")
      const info = await data.json()
      //setOrg(await info[1])
      setData(await info);
        //console.log(Object.keys(info[0]));
        setOrg(Object.keys(info[0]))

    }
  
    useEffect(()=>{
        createColumns()
        
    }, [org])
  // console.log(dataI)
  useEffect(()=> {
    setAPIData();



  },[]);
  
 
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'ministry', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, ministry: "org", firstName: 'Jon', age: 35 },
    { id: 2, ministry: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, ministry: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, ministry: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, ministry: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, ministry: 'Melisandre', firstName: null, age: 150 },
    { id: 7, ministry: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, ministry: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, ministry: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  
    return (
      <>
        <div>
         
        <h1>Hello World</h1>
        <h2>SHR Dashboard</h2>
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rowsData}
        columns={fields}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
        <Button href="/">Go Home</Button>
        </div>
  
      </>
    )
}

export default Dashboard