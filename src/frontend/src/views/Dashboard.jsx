import { useState, useEffect } from 'react'
import '../App.css'
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Form from '../components/Form';
import AverageSalary from '../components/AverageSalary';


function Dashboard() {
  const [org, setOrg] = useState("");
  const [rawData, setRawData] = useState({});
  const [positionAndClassificationData, setPositionAndClassificationData] = useState({});
  const [organizationFilteredData, setOrganizationFilteredData] = useState({});
  const [data, setData] = useState({});
  const [fields, setFields] = useState([])
  const [rowsData, setRowsData] = useState([]);
  const [searchPosition, setSearchPosition] = useState('');
  const [searchClassification, setSearchClassification] = useState('');
  const [searchOrganization, setSearchOrganization] = useState('');
  const [revealMeme, setRevealMeme] = useState(false)


  const createColumns = () => {
    let fields = [];
    for (let i = 0; i < org.length; i++) {
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
    for (let i = 0; i < data.length; i++) {
      let dataLocal = {}

      for (let j = 0; j < fields.length; j++) {

        if (data[i]) {

          dataLocal[(fields[j].field)] = data[i][fields[j].field]
        }

      }
      dataLocal.id = i;
      fieldsLocal.push(dataLocal);
    }
    setRowsData(fieldsLocal)
  }

  const filterData = (searchCategory, searchFilter, data) => {
    const response = []
    for (let item of data) {
      if (item && Object.keys(item).includes(searchCategory) && item[searchCategory].toLowerCase().includes(searchFilter.toLowerCase())) {
        response.push(item)
      }
    }
    return response
  }

  async function setAPIData() {
    const data = await fetch("http://localhost:3000/api/data")
    const tempInfo = await data.json()
    const info = await tempInfo;
    setRawData(info);
    //setOrg(await info[1])
    setData(info);
    setPositionAndClassificationData(info)
    //console.log(Object.keys(info[0]));
    setOrg(Object.keys(info[0]))

  }

  useEffect(() => {
    if (Object.keys(rawData).length > 0) {
      const firstFilter = filterData('position.title', searchPosition, rawData)
      const secondFilter = filterData('position.classification', searchClassification, firstFilter)
      const thirdFilter = filterData('organization', searchOrganization, secondFilter)

      const positionOnly = filterData('position.classification', searchClassification, rawData)
      setPositionAndClassificationData(secondFilter)
      setData(thirdFilter);

      const organizationFilteredData = filterData('organization', searchOrganization, secondFilter)
      setOrganizationFilteredData(organizationFilteredData)
      console.log('data: ', firstFilter)
      console.log('position data: ', positionOnly)
    }
  }, [searchPosition, searchClassification, searchOrganization])

  useEffect(() => {
    createColumns()
  }, [org, searchPosition, searchClassification, searchOrganization, data])
  // console.log(dataI)

  useEffect(() => {
    setAPIData();
  }, []);



  return (
    <>
    <br/>
      <div>
        <h2>SHR Dashboard</h2>
        <Form />
        <TextField id="outlined-basic" label="Search by position" variant="outlined" value={searchPosition} onChange={e => setSearchPosition(e.target.value)} />
        <TextField id="outlined-basic" label="Search by classification" variant="outlined" value={searchClassification} onChange={e => setSearchClassification(e.target.value)} />
        <TextField id="outlined-basic" label="Search by organization" variant="outlined" value={searchOrganization} onChange={e => setSearchOrganization(e.target.value)} />
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <AverageSalary filteredData={data} title={'Organization Comparible Position  Salaries'} />
        <AverageSalary filteredData={positionAndClassificationData} title={'BCPS-wide Position & Classification'} />
        </div>
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
        <br/>
        <h3>Based on this information, SHR recommends a salary of:  </h3>
        <TextField id="outlined-basic" label="Recomended Salary" variant="standard"  />
       <br/>
       <br/>
        <Button href="/">Go Home</Button>
      </div>
      <div style={{padding: '5px'}}>
       
        {revealMeme ? 
        <img src={'https://i.imgflip.com/1jwfc9.jpg'} />
       :  <button onClick={() => setRevealMeme(true)}>Reveal Meme</button>}
      </div>
      <br/>
    </>
  )
}

export default Dashboard