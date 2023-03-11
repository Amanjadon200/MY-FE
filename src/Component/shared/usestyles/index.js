import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles((theme) => {
    return {
      root: {
        "&.MuiBox-root":{
        "&.MuiFormControl-root":{
        "&.MuiInputBase-root":{
            "&.MuiSelect-select":{
                "padding":"0px"}
        }
    }
    }

        // "&.MuiButton-root": {
        //   border: "1px black solid",
        // },
        // "&.MuiButton-text": {
        //   color: "grey",
        // },
        // "&.MuiButton-contained": {
        //   backgroundColor: "#252525",
        //   color: "white",
        //   fontFamily: "mulish",
        //   fontSize: "0.8rem",
        //   borderColor: "#575757 !important",
        //   textTransform: "none",
        // },
        // "&.MuiButton-outlined": {
        //   backgroundColor: "#FFFFFF",
        //   color: "#575757",
        //   fontWeight: 700,
        //   fontFamily: "mulish",
        //   fontSize: "0.8rem",
        //   borderColor: "#575757 !important",
        //   textTransform: "none",
        // },
      },
    };
  });
  