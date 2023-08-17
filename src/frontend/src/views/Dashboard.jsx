import { useState, useEffect } from 'react'
import '../App.css'
import Button from '@mui/material/Button';
import { DataGrid} from '@mui/x-data-grid';
import Form from '../components/Form';



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

            for(let j = 0; j< fields.length; j++) {
                
                if(data[i]) {

                    dataLocal[(fields[j].field)] = data[i][fields[j].field]
            }
              
            }
            dataLocal.id = i;
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
  
 


  
    return (
      <>
        <div>
         
        <h1>Hello World</h1>
        <h2>SHR Dashboard</h2>
        <Form/>
        <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rowsData}
        columns={fields}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
    </div>
        <Button href="/">Go Home</Button>
        </div>
  
      </>
    )
}

export default Dashboard