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
  Button,
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

const FormWrapper = styled("form")({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  maxHeight: "700px",
  justifyContent: "start",
});

const MUIForm = () => {
  const [dealType, setDealType] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setDealType(event.target.value as string);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <FormWrapper>
      <FormControl sx={{ mb: "5px", mr: 0, width: "15ch" }} variant="outlined">
        <FormLabel sx={{ color: "primary", margin: "10px" }}>GUID</FormLabel>
      </FormControl>
      <FormControl
        sx={{ mb: "5px", mr: 0, ml: 0, width: "20ch" }}
        variant="outlined"
      >
        <FormLabel sx={{ color: "primary", margin: "10px" }}>
          Transaction Name
        </FormLabel>
      </FormControl>
      <FormControl
        sx={{ mb: "5px", mr: 0, ml: 0, width: "15ch" }}
        variant="outlined"
      >
        <FormLabel sx={{ color: "primary", margin: "10px" }}>
          Originator
        </FormLabel>
      </FormControl>
      <FormControl
        sx={{ mb: "5px", mr: 0, ml: 0, width: "15ch" }}
        variant="outlined"
      >
        <FormLabel sx={{ color: "primary", margin: "10px" }}>Issuer</FormLabel>
      </FormControl>
      <FormControl
        sx={{ mb: "5px", mr: 0, ml: 0, width: "15ch" }}
        variant="outlined"
      >
        <FormLabel sx={{ color: "primary", margin: "10px" }}>
          Asset Class
        </FormLabel>
      </FormControl>
      <FormControl
        sx={{ mb: "5px", mr: 0, ml: 0, width: "15ch" }}
        variant="outlined"
      >
        <FormLabel sx={{ color: "primary", margin: "10px" }}>
          Issuance Type
        </FormLabel>
      </FormControl>
      <FormControl
        sx={{ mb: "5px", mr: 0, ml: 0, width: "20ch" }}
        variant="outlined"
      >
        <FormLabel sx={{ color: "primary", margin: "10px" }}>
          Deal Team Name
        </FormLabel>
      </FormControl>
      <FormControl
        sx={{ mb: "5px", mr: 0, ml: 0, width: "15ch" }}
        variant="outlined"
      >
        <FormLabel sx={{ color: "primary", margin: "10px" }}>
          Execution Lead
        </FormLabel>
      </FormControl>
      <FormControl
        sx={{ mb: "5px", mr: 0, ml: 0, width: "15ch" }}
        variant="outlined"
      >
        <FormLabel sx={{ color: "primary", margin: "10px" }}>
          Launch Date
        </FormLabel>
      </FormControl>
      <FormControl
        sx={{ mb: "5px", mr: 0, ml: 0, width: "15ch" }}
        variant="outlined"
      >
        <FormLabel sx={{ color: "primary", margin: "10px" }}>
          Pricing Date
        </FormLabel>
      </FormControl>
      <FormControl
        sx={{ mr: 0, ml: 0, mb: "170px", width: "20ch" }}
        variant="outlined"
      >
        <FormLabel sx={{ color: "primary", margin: "10px" }}>
          Settlement Date
        </FormLabel>
      </FormControl>

      <FormControl sx={{ mb: "5px", width: "20ch" }} variant="outlined">
        <TextField
          label="GUID"
          id="outlined-start-adornment"
          size="small"
          sx={{ mb: "5px", width: "25ch" }}
        />
      </FormControl>
      <FormControl sx={{ mb: "5px", width: "20ch" }} variant="outlined">
        <TextField
          label="Transaction Name"
          id="outlined-start-adornment"
          size="small"
          sx={{ mb: "5px", width: "25ch" }}
        />
      </FormControl>
      <FormControl sx={{ mb: "5px", width: "20ch" }} variant="outlined">
        <TextField
          label="Originator"
          id="outlined-start-adornment"
          size="small"
          sx={{ mb: "5px", width: "25ch" }}
        />
      </FormControl>
      <FormControl sx={{ mb: "5px", width: "20ch" }} variant="outlined">
        <TextField
          label="Issuer"
          id="outlined-start-adornment"
          size="small"
          sx={{ mb: "5px", width: "25ch" }}
        />
      </FormControl>
      <FormControl sx={{ mb: "5px", width: "20ch" }}>
        <InputLabel id="demo-simple-select-label">Asset Class</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Asset Class"
          size="small"
          onChange={handleChange}
          sx={{ mb: "5px", width: "25ch" }}
        >
          <MenuItem value="Securitisation">Securitisation</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ mb: "5px", width: "20ch" }} variant="outlined">
        <TextField
          label="Issuance Type"
          id="outlined-start-adornment"
          size="small"
          sx={{ mb: "5px", width: "25ch" }}
        />
      </FormControl>
      <FormControl sx={{ mb: "5px", width: "20ch" }} variant="outlined">
        <TextField
          label="Deal Team Name"
          id="outlined-start-adornment"
          size="small"
          sx={{ mb: "5px", width: "25ch" }}
        />
      </FormControl>
      <FormControl sx={{ mb: "5px", width: "20ch" }} variant="outlined">
        <TextField
          label="Execution Lead"
          id="outlined-start-adornment"
          size="small"
          sx={{ mb: "5px", width: "25ch" }}
        />
      </FormControl>
      <FormControl sx={{ mb: "5px", width: "20ch" }} variant="outlined">
        <TextField
          label="Launch Date"
          id="outlined-start-adornment"
          size="small"
          sx={{ mb: "5px", width: "25ch" }}
        />
      </FormControl>
      <FormControl sx={{ mb: "5px", width: "20ch" }} variant="outlined">
        <TextField
          label="Pricing Date"
          id="outlined-start-adornment"
          size="small"
          sx={{ mb: "5px", width: "25ch" }}
        />
      </FormControl>
      <FormControl sx={{ mb: "5px", width: "20ch" }} variant="outlined">
        <TextField
          label="Settlement Date"
          id="outlined-start-adornment"
          size="small"
          sx={{ mb: "150px", width: "25ch" }}
        />
      </FormControl>

      <FormControlLabel
        value="start"
        label="Wholesale Bond New Issue"
        labelPlacement="end"
        sx={{ mb: "5px", width: "20ch", color: "#434343" }}
        control={<Checkbox />}
      />
      <FormControlLabel
        value="start"
        label="Securitisation Bond New Issue"
        labelPlacement="end"
        sx={{ mb: "5px", width: "20ch", color: "#434343" }}
        control={<Checkbox />}
      />
      <FormControlLabel
        value="start"
        label="Listed Hybrid"
        labelPlacement="end"
        sx={{ mb: "5px", width: "20ch", color: "#434343" }}
        control={<Checkbox />}
      />
      <FormControlLabel
        value="start"
        label="Listed LIC/LIT"
        labelPlacement="end"
        sx={{ mb: "5px", width: "20ch", color: "#434343" }}
        control={<Checkbox />}
      />
      <FormControlLabel
        value="start"
        label="Private Placement"
        labelPlacement="end"
        sx={{ mb: "5px", width: "20ch", color: "#434343" }}
        control={<Checkbox />}
      />
      <FormControlLabel
        value="start"
        label="Equity"
        labelPlacement="end"
        sx={{ mb: "5px", width: "20ch", color: "#434343" }}
        control={<Checkbox />}
      />

      <FormControl sx={{ mb: "5px", mr: 0, width: "15ch" }} variant="outlined">
        <FormLabel sx={{ color: "primary", margin: "10px" }}>Region</FormLabel>
      </FormControl>
      <FormControl sx={{ mb: "5px", mr: 0, width: "15ch" }} variant="outlined">
        <FormLabel sx={{ color: "primary", margin: "10px" }}>ISIN</FormLabel>
      </FormControl>
      <FormControl sx={{ mb: "5px", mr: 0, width: "15ch" }} variant="outlined">
        <FormLabel sx={{ color: "primary", margin: "10px", mb: "250px" }}>
          Deal Volume
        </FormLabel>
      </FormControl>

      <FormControl sx={{ mb: "5px", width: "20ch", mt: "295px" }}>
        <InputLabel id="demo-simple-select-label">Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Asset Class"
          size="small"
          onChange={handleChange}
          sx={{ mb: "5px", width: "25ch" }}
        >
          <MenuItem value="Australia">Australia</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ mb: "5px", width: "20ch" }} variant="outlined">
        <TextField
          label="ISIN"
          id="outlined-start-adornment"
          size="small"
          sx={{ mb: "5px", width: "25ch" }}
        />
      </FormControl>
      <FormControl sx={{ width: "20ch", mb: "250px" }} variant="outlined">
        <TextField
          label="Deal Volume"
          id="outlined-start-adornment"
          size="small"
          sx={{ mb: "5px", width: "25ch" }}
        />
      </FormControl>

      <Box
        sx={{
          width: 300,
          height: 285,
          border: "1px dashed grey",
          color: "#434343",
        }}
      >
        {" "}
        Created: 25/04/2023 John Doe
        <br />
        <br />
        Modified: 26/04/2023 John Doe
        <br />
        <br />
        Submitted: 27/04/2023 John Doe
        <br />
        <br />
        Asssessment: <br />
        <br />
        Current Statement: In Progress
        <br />
        <br />
        <Button variant="contained">Submit</Button>
      </Box>
    </FormWrapper>
  );
};

export default MUIForm;
