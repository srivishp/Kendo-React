import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import {
  FormLabel,
  FormControlLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Label } from "@progress/kendo-react-labels";

// const MUIForm = () => {
//   const [dealType, setDealType] = React.useState("");
//   const handleChange = (event: SelectChangeEvent) => {
//     setDealType(event.target.value as string);
//   };
//   const label = { inputProps: { "aria-label": "Checkbox demo" } };
//   const [expirationDate, setExpirationDate] = React.useState("");
//   const [checked, setChecked] = React.useState(false);

//   return (
//     <div>
// <Box
//   sx={{
//     width: 800,
//     height: 1000,
//     border: "1px dashed grey",
//   }}
// >
//         <FormControl sx={{ m: 1, width: "48ch" }} variant="outlined">
//           <TextField
//             label="GUID"
//             id="outlined-start-adornment"
//             sx={{ m: 1, width: "48ch" }}
//           />
//         </FormControl>
//         <FormControlLabel
//           value="start"
//           label="Wholesale Bond New Issue"
//           labelPlacement="end"
//           sx={{ mr: "4ch", ml: "8ch", color: "#434343" }}
//           control={<Checkbox />}
//         />
//         <br />
//         <FormControl sx={{ m: 1, width: "48ch" }} variant="outlined">
//           <TextField
//             label="Transaction Name"
//             id="outlined-start-adornment"
//             sx={{ m: 1, width: "48ch" }}
//           />
//         </FormControl>
//         <FormControlLabel
//           value="start"
//           label="Securitisation New Issue"
//           labelPlacement="end"
//           sx={{ mr: "4ch", ml: "8ch", color: "#434343" }}
//           control={<Checkbox />}
//         />
//         <br />
//         <FormControl sx={{ m: 1, width: "48ch" }} variant="outlined">
//           <TextField
//             label="Originator"
//             id="outlined-start-adornment"
//             sx={{ m: 1, width: "48ch" }}
//           />
//         </FormControl>
//         <FormControlLabel
//           value="start"
//           label="Listed Hybrid"
//           labelPlacement="end"
//           sx={{ mr: "4ch", ml: "8ch", color: "#434343" }}
//           control={<Checkbox />}
//         />
//         <br />
//         <FormControl sx={{ m: 1, width: "48ch" }} variant="outlined">
//           <TextField
//             label="Issuer"
//             id="outlined-start-adornment"
//             sx={{ m: 1, width: "48ch" }}
//           />
//         </FormControl>
//         <FormControlLabel
//           value="start"
//           label="Listed LIC/LIT"
//           labelPlacement="end"
//           sx={{ mr: "4ch", ml: "8ch", color: "#434343" }}
//           control={<Checkbox />}
//         />
//         <br />
//         <FormControl sx={{ m: 1, width: "48ch" }}>
//           <InputLabel id="demo-simple-select-label">Asset Class</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             label="Asset Class"
//             onChange={handleChange}
//             sx={{ m: 1, width: "48ch" }}
//           >
//             <MenuItem value="Securitisation">Securitisation</MenuItem>
//           </Select>
//         </FormControl>
//         <FormControlLabel
//           value="start"
//           label="Private Placement"
//           labelPlacement="end"
//           sx={{ mr: "4ch", ml: "8ch", color: "#434343" }}
//           control={<Checkbox />}
//         />
//         <br />
//         <FormControl sx={{ m: 1, width: "30ch" }}>
//           <InputLabel id="demo-simple-select-label">Issuance Type</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             label="Issuance Type"
//             onChange={handleChange}
//             sx={{ m: 1, width: "16ch" }}
//           >
//             <MenuItem value="RMBS">RMBS</MenuItem>
//           </Select>
//         </FormControl>
//         <FormControl sx={{ m: 1, width: "20ch" }}>
//           <InputLabel id="demo-simple-select-label">Region</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             label="Region"
//             onChange={handleChange}
//             sx={{ m: 1, width: "16ch" }}
//           >
//             <MenuItem value="Australia">Australia</MenuItem>
//           </Select>
//         </FormControl>
//         <FormControlLabel
//           value="start"
//           label="Equity"
//           labelPlacement="end"
//           sx={{ mr: "4ch", ml: "4.5ch", color: "#434343" }}
//           control={<Checkbox />}
//         />
//         <br />
//         <FormControl sx={{ m: 1, width: "48ch" }} variant="outlined">
//           <TextField
//             label="Deal Team Name"
//             id="outlined-start-adornment"
//             sx={{ m: 1, width: "48ch" }}
//           />
//         </FormControl>
//         <br />
//         <FormControl sx={{ m: 1, width: "30ch" }}>
//           <InputLabel id="demo-simple-select-label">Execution Lead</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             label="Executin Lead"
//             onChange={handleChange}
//             sx={{ m: 1, width: "20ch" }}
//           >
//             <MenuItem value="John Doe">John Doe</MenuItem>
//           </Select>
//         </FormControl>
//         <br />
//         <FormControl sx={{ m: 1, width: "30ch" }}>
//           <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <DatePicker
//               sx={{ m: 1, width: "20ch", color: "#434343" }}
//               label="Launch Date"
//             />
//           </LocalizationProvider>
//         </FormControl>
//         <FormControl sx={{ m: 1, width: "30ch" }} variant="outlined">
//           <TextField
//             label="ISIN"
//             id="outlined-start-adornment"
//             sx={{ m: 1, width: "20ch" }}
//           />
//         </FormControl>
//         <br />
//         <FormControl sx={{ m: 1, width: "30ch" }}>
//           <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <DatePicker
//               sx={{ m: 1, width: "20ch", color: "#434343" }}
//               label="Pricing Date"
//             />
//           </LocalizationProvider>
//         </FormControl>
//         <FormControl sx={{ m: 1, width: "30ch" }} variant="outlined">
//           <TextField
//             label="Deal Volume"
//             id="outlined-start-adornment"
//             sx={{ m: 1, width: "20ch" }}
//           />
//         </FormControl>
//         <br />
//         <FormControl sx={{ m: 1, width: "30ch" }}>
//           <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <DatePicker
//               sx={{ m: 1, width: "20ch", color: "#434343" }}
//               label="Settlement Date"
//             />
//           </LocalizationProvider>
//         </FormControl>
//       </Box>
//     </div>
//   );
// };

// export default MUIForm;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MUIForm = () => {
  const [dealType, setDealType] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setDealType(event.target.value as string);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [expirationDate, setExpirationDate] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <Grid container spacing={2}>
    //     <Grid container spacing={0} item xs={1}>
    //       <FormControl sx={{ mr: 0, width: "20ch" }} variant="outlined">
    //         <FormLabel sx={{ color: "primary" }}>GUID</FormLabel>
    //       </FormControl>
    //     </Grid>
    //     <Grid item xs={2}>
    //       <FormControl sx={{ ml: 0, width: "20ch" }} variant="outlined">
    //         <TextField
    //           label="GUID"
    //           id="outlined-start-adornment"
    //           size="small"
    //           sx={{ width: "20ch" }}
    //         />
    //       </FormControl>
    //     </Grid>
    //     <Grid item xs={4}>
    //       <Item>xs=4</Item>
    //     </Grid>
    //     <Grid item xs={8}>
    //       <Item>xs=8</Item>
    //     </Grid>
    //   </Grid>
    // </Box>
    <Grid container spacing={2}>
      <Grid container spacing={0} item xs={1}>
        <FormControl sx={{ mr: 0, width: "10ch" }} variant="outlined">
          <FormLabel sx={{ color: "primary" }}>GUID</FormLabel>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl sx={{ ml: 0, width: "20ch" }} variant="outlined">
          <TextField
            label="GUID"
            id="outlined-start-adornment"
            size="small"
            sx={{ width: "35ch" }}
          />
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControlLabel
          value="start"
          label="Wholesale Bond New Issue"
          labelPlacement="end"
          sx={{ ml: 0, width: "20ch", color: "#434343" }}
          control={<Checkbox />}
        />
      </Grid>
      <Grid container spacing={4} m={1} item xs={4}>
        <Box
          sx={{
            width: 300,
            height: 300,
            border: "1px dashed grey",
          }}
        />
      </Grid>
      <Grid container spacing={0} item xs={1}>
        <FormControl sx={{ mr: 0, ml:0, width: "10ch" }} variant="outlined">
          <FormLabel sx={{ color: "primary" }}>Transaction Name</FormLabel>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl sx={{ ml: 0, width: "20ch" }} variant="outlined">
          <TextField
            label="Transaction Name"
            id="outlined-start-adornment"
            size="small"
            sx={{ width: "35ch" }}
          />
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <FormControlLabel
          value="start"
          label="Securitisation New Issue"
          labelPlacement="end"
          sx={{ ml: 0, width: "20ch", color: "#434343" }}
          control={<Checkbox />}
        />
      </Grid>
    </Grid>
  );
};

export default MUIForm;
