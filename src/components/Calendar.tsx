import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const Calendar = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker sx={{ color: "#434343" }}/>
    <DateCalendar sx={{ color: "#434343" }}/>
  </LocalizationProvider>
  );
}

export default Calendar;