import '../App.css'
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

function Form() {
    const [app, setApp] = useState('');
    const [band, setBand] = useState('');
    const [increase, setIncrease] = useState('');
    const handleAppChange = (event) => {
        setApp(event.target.value);
      };
      const handleIncChange = (event) => {
        setIncrease(event.target.value);
      };
      const handleBandChange = (event) => {
        setBand(event.target.value);
      };
  return (
    <>
<p>Fill out this form</p>
<form>
   <h4>Position Info:</h4>
      <TextField id="standard-basic" label="Full Name" variant="standard" sx={{ m: 1, minWidth: 280 }}/>
      <br/>
      <TextField id="standard-basic" label="Position Title" variant="standard" sx={{ m: 1, minWidth: 280 }}/>
      <TextField id="standard-basic" label="Position Number" variant="standard" type="number" sx={{ m: 1, minWidth: 280 }}/>
      <br/>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 280 }}>
        <InputLabel id="demo-simple-select-standard-label">Appointment</InputLabel>
        <Select
          value={app}
          onChange={handleAppChange}
          label="Expirience"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Temporary, No Competitive Process</MenuItem>
          <MenuItem value={2}>Temporary, Competitive Process</MenuItem>
          <MenuItem value={3}>Permanent, No Competitive Process</MenuItem>
          <MenuItem value={4}>Permanent, Competitive Process</MenuItem>
        </Select>
      </FormControl>
      <TextField id="standard-basic" label="Reccomended Salary" variant="standard" type="number" sx={{ m: 1, minWidth: 280 }}/>
      <br/>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 280 }}>
        <InputLabel id="demo-simple-select-standard-label">Recomended Increase</InputLabel>
        <Select
          value={increase}
          onChange={handleIncChange}
          label="Expirience"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={5}>5%</MenuItem>
          <MenuItem value={6}>6%</MenuItem>
          <MenuItem value={7}>7%</MenuItem>
          <MenuItem value={8}>8%</MenuItem>
          <MenuItem value={7}>9%</MenuItem>
          <MenuItem value={8}>10%</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 280 }}>
        <InputLabel id="demo-simple-select-standard-label">Classification</InputLabel>
        <Select
          value={band}
          onChange={handleBandChange}
          label="Expirience"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Band 1</MenuItem>
          <MenuItem value={2}>Band 2</MenuItem>
          <MenuItem value={3}>Band 3</MenuItem>
          <MenuItem value={4}>Band 4</MenuItem>
          <MenuItem value={5}>Band 5</MenuItem>
          <MenuItem value={6}>Band 6</MenuItem>
          <MenuItem value={7}>Band 7</MenuItem>
        </Select>
      </FormControl>
      <h4>Education Level:</h4>
</form>
<br/>
    </>
  )
}

export default Form
