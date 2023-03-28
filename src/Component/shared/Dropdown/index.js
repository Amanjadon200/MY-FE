
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown({setFormData,formData,arr}) {
  const [option, setOption] = React.useState('');
  
  const handleChange = (event) => {
    setOption(event.target.value);
    setFormData(
        {
            ...formData,type:event.target.value
        }
    )  
  };
  console.log(formData)
  return (
    <Box sx={{ minWidth: '30vw' }} >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label " className='!top-[-8px]'>Choose option</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formData.type}
          label="Type"
          onChange={handleChange}
          inputProps={{
              classes: {
                  select: "!p-2  !text-black"
                },
            }}
          classes={{iconFilled : "!text-nero dark:!text-white"}}
        >
          {
            arr.map((data)=>{
              return <MenuItem value={data}>{data}</MenuItem>
            })
          }
        </Select>
      </FormControl>
    </Box>
  );
}