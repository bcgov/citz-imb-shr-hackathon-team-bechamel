import '../App.css'
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import FormLabel from '@mui/material/FormLabel';

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
      const longText = "Education and expirience is calculated on a 1 - 4 scale based on the level of education and expirience directly related to the position. A score of 1 means they have minimal relating expirience and a score of 4 is amazing"
      
  return (
    <>
<p>Fill out this form</p>
<form>
   <h4>Position Info:</h4>
      <TextField id="standard-basic" label="Full Legal Name" variant="standard" sx={{ m: 1, minWidth: 280 }}/>
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
        </Select>
      </FormControl>
      <Tooltip title={longText}>
      <h4>Education  and Expirience Level:</h4>
      </Tooltip>
      <Box display="flex" 
        width={1250} 

        alignItems="center"
        justifyContent="center">
<FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
      <FormControlLabel control={<Radio />} value={1} label="1: Minimal education and expirience related to area of work" />
      <FormControlLabel control={<Radio />} value={2} label="2: Limited education and expirience related to area of work" />
      <FormControlLabel control={<Radio />} value={3} label="3: Multiple years of education and expirience related to area of work" />
      <FormControlLabel control={<Radio />} value={4} label="4: Senior level education and expirience and high preformance related to work area" />
      </RadioGroup>
   </FormControl>
   
      </Box>
      <br/>
   <TextField id="outlined-basic" label="Rational" variant="outlined" sx={{ m: 1, minWidth: 560}} multiline rows={2}/>
      <h4>Comments</h4>
      <TextField id="outlined-basic" label="Additional Comments" variant="outlined" sx={{ m: 1, minWidth: 560, minHeight: 200 }} multiline rows={4}/>
</form>
<br/>
    </>
  )
}

export default Form
