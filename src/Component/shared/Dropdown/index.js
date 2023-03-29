
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown({ setFormData, formData, arr,isEdit,setIsEdit }) {
  const handleChange = (event) => {
    if (arr[0] === "Request") {
      setFormData(
        {
          ...formData, type: event.target.value
        }
      )
    }
    else {
      setFormData({ ...formData, gender: event.target.value })
    }
  };
  console.log(arr[0])
  return (
    <Box sx={{ width:'100%'}} className="[&_.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input]:!border-solid [&_.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input]:!border-2 [&_.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input]:!border-gray-500">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label " className='!top-[-8px] '></InputLabel>
        <Select
          disabled={arr[0]==="Request"?false:!isEdit?true:false}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formData.type===''?'':formData.type || formData.gender}
          label="Type"
          onChange={handleChange}
          inputProps={{
            classes: {
              select: `!p-2  !text-black  ${arr[0]==="Request"?"bg-white":!isEdit?'!bg-Gainsboro':""}`
            },
          }}
          classes={{ iconFilled: `!text-nero dark:!text-white border-2 border-gray-500` }}
        >
          {
            arr.map((data) => {
              return <MenuItem value={data}>{data}</MenuItem>
            })
          }
        </Select>
      </FormControl>
    </Box>
  );
}